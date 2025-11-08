// services/database.ts
import * as SQLite from 'expo-sqlite';

// Abre ou cria o banco de dados de forma síncrona
const db = SQLite.openDatabaseSync('mercadinho.db');

// Inicializar o banco de dados
export const initDatabase = async (): Promise<void> => {
  try {
    await db.withTransactionAsync(async () => {
      // Tabela de promoções
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS promocoes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          produto_id TEXT NOT NULL,
          produto_nome TEXT NOT NULL,
          desconto INTEGER NOT NULL,
          data_inicio TEXT NOT NULL,
          data_fim TEXT NOT NULL,
          data_criacao TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'ativa',
          data_expiracao TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
      `);

      // Tabela de histórico de promoções
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS historico_promocoes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          promocao_id INTEGER NOT NULL,
          produto_nome TEXT NOT NULL,
          desconto INTEGER NOT NULL,
          data_inicio TEXT NOT NULL,
          data_fim TEXT NOT NULL,
          acao TEXT NOT NULL,
          data_acao TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
      `);

      console.log('Banco de dados inicializado com sucesso!');
    });
  } catch (error) {
    console.error('Erro ao inicializar banco:', error);
    throw error;
  }
};

// --- Extensão de tipagem genérica ---
declare module 'expo-sqlite' {
  interface SQLiteDatabase {
    withTransactionAsync<T>(callback: () => Promise<T>): Promise<T>;
  }
}

export { db };
