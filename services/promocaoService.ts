// services/promocaoService.ts
import { db, initDatabase } from './database';

export interface Promocao {
    id: number;
    produtoId: string;
    produtoNome: string;
    desconto: number;
    dataInicio: string;
    dataFim: string;
    dataCriacao: string;
    status: 'ativa' | 'expirada' | 'cancelada';
    dataExpiracao?: string;
}

export interface HistoricoPromocao {
    id: number;
    promocaoId: number;
    produtoNome: string;
    desconto: number;
    dataInicio: string;
    dataFim: string;
    acao: 'criada' | 'editada' | 'excluida' | 'expirada';
    dataAcao: string;
}

// Inicializar banco
export const inicializarBanco = async (): Promise<void> => {
    await initDatabase();
};

// Buscar todas as promoções
export const buscarTodasPromocoes = async (): Promise<Promocao[]> => {
    try {
        const result = await db.getAllAsync<any>(
            `SELECT * FROM promocoes ORDER BY data_criacao DESC`
        );

        return result.map(row => ({
            id: row.id,
            produtoId: row.produto_id,
            produtoNome: row.produto_nome,
            desconto: row.desconto,
            dataInicio: row.data_inicio,
            dataFim: row.data_fim,
            dataCriacao: row.data_criacao,
            status: row.status,
            dataExpiracao: row.data_expiracao
        }));
    } catch (error) {
        console.error('Erro ao buscar promoções:', error);
        throw error;
    }
};

// Buscar histórico completo
export const buscarHistoricoCompleto = async (): Promise<HistoricoPromocao[]> => {
    try {
        const result = await db.getAllAsync<any>(
            `SELECT * FROM historico_promocoes ORDER BY data_acao DESC`
        );

        return result.map(row => ({
            id: row.id,
            promocaoId: row.promocao_id,
            produtoNome: row.produto_nome,
            desconto: row.desconto,
            dataInicio: row.data_inicio,
            dataFim: row.data_fim,
            acao: row.acao,
            dataAcao: row.data_acao
        }));
    } catch (error) {
        console.error('Erro ao buscar histórico:', error);
        throw error;
    }
};

// Criar nova promoção
export const criarPromocao = async (dados: Omit<Promocao, 'id' | 'status'>): Promise<Promocao> => {
    return await db.withTransactionAsync(async () => {
        try {
            // Inserir promoção
            const result = await db.runAsync(
                `INSERT INTO promocoes 
         (produto_id, produto_nome, desconto, data_inicio, data_fim, data_criacao, status) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [
                    dados.produtoId,
                    dados.produtoNome,
                    dados.desconto,
                    dados.dataInicio,
                    dados.dataFim,
                    dados.dataCriacao,
                    'ativa'
                ]
            );

            const insertId = result.lastInsertRowId;

            // Adicionar ao histórico
            await db.runAsync(
                `INSERT INTO historico_promocoes 
         (promocao_id, produto_nome, desconto, data_inicio, data_fim, acao, data_acao) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [
                    insertId,
                    dados.produtoNome,
                    dados.desconto,
                    dados.dataInicio,
                    dados.dataFim,
                    'criada',
                    new Date().toISOString().split('T')[0]
                ]
            );

            return {
                id: insertId,
                produtoId: dados.produtoId,
                produtoNome: dados.produtoNome,
                desconto: dados.desconto,
                dataInicio: dados.dataInicio,
                dataFim: dados.dataFim,
                dataCriacao: dados.dataCriacao,
                status: 'ativa'
            };
        } catch (error) {
            console.error('Erro ao criar promoção:', error);
            throw error;
        }
    });
};

// Atualizar promoção
export const atualizarPromocao = async (id: number, dados: Partial<Promocao>): Promise<void> => {
    try {
        const campos: string[] = [];
        const valores: any[] = [];

        if (dados.desconto !== undefined) {
            campos.push('desconto = ?');
            valores.push(dados.desconto);
        }
        if (dados.dataFim !== undefined) {
            campos.push('data_fim = ?');
            valores.push(dados.dataFim);
        }
        if (dados.status !== undefined) {
            campos.push('status = ?');
            valores.push(dados.status);
        }

        valores.push(id);

        await db.runAsync(
            `UPDATE promocoes SET ${campos.join(', ')} WHERE id = ?`,
            valores
        );
    } catch (error) {
        console.error('Erro ao atualizar promoção:', error);
        throw error;
    }
};

// Excluir promoção
export const excluirPromocao = async (id: number): Promise<void> => {
    return await db.withTransactionAsync(async () => {
        try {
            const promocao = await db.getFirstAsync<any>(
                `SELECT * FROM promocoes WHERE id = ?`,
                [id]
            );

            if (!promocao) {
                throw new Error('Promoção não encontrada');
            }

            await db.runAsync(
                `INSERT INTO historico_promocoes 
         (promocao_id, produto_nome, desconto, data_inicio, data_fim, acao, data_acao) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [
                    id,
                    promocao.produto_nome,
                    promocao.desconto,
                    promocao.data_inicio,
                    promocao.data_fim,
                    'excluida',
                    new Date().toISOString().split('T')[0]
                ]
            );

            await db.runAsync(`DELETE FROM promocoes WHERE id = ?`, [id]);
        } catch (error) {
            console.error('Erro ao excluir promoção:', error);
            throw error;
        }
    });
};

// Atualizar status das promoções
export const atualizarStatusPromocoes = async (): Promise<void> => {
    return await db.withTransactionAsync(async () => {
        try {
            const hoje = new Date().toISOString().split('T')[0];

            const promocoesExpiradas = await db.getAllAsync<any>(
                `SELECT id, produto_nome, desconto, data_inicio, data_fim FROM promocoes 
         WHERE data_fim < ? AND status = 'ativa'`,
                [hoje]
            );

            await db.runAsync(
                `UPDATE promocoes SET status = 'expirada', data_expiracao = ? 
         WHERE data_fim < ? AND status = 'ativa'`,
                [hoje, hoje]
            );

            for (const promocao of promocoesExpiradas) {
                await db.runAsync(
                    `INSERT INTO historico_promocoes 
           (promocao_id, produto_nome, desconto, data_inicio, data_fim, acao, data_acao) 
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
                    [
                        promocao.id,
                        promocao.produto_nome,
                        promocao.desconto,
                        promocao.data_inicio,
                        promocao.data_fim,
                        'expirada',
                        hoje
                    ]
                );
            }
        } catch (error) {
            console.error('Erro ao atualizar status:', error);
            throw error;
        }
    });
};

// Estatísticas - ATUALIZADO para incluir canceladas
export const obterEstatisticasPromocoes = async (): Promise<{
    total: number;
    ativas: number;
    expiradas: number;
    canceladas: number;
}> => {
    try {
        const result = await db.getAllAsync<{ status: string; count: number }>(
            `SELECT status, COUNT(*) as count FROM promocoes GROUP BY status`
        );

        const stats = {
            total: 0,
            ativas: 0,
            expiradas: 0,
            canceladas: 0
        };

        for (const row of result) {
            stats.total += row.count;
            if (row.status === 'ativa') stats.ativas = row.count;
            if (row.status === 'expirada') stats.expiradas = row.count;
            if (row.status === 'cancelada') stats.canceladas = row.count;
        }

        return stats;
    } catch (error) {
        console.error('Erro ao obter estatísticas:', error);
        throw error;
    }
};
