// Versão SIMPLES em memória - sem AsyncStorage, sem SQLite

export interface Produto {
  id: string;
  nome: string;
  preco: number;
  estoque: number;
  categoria: string;
  codigoBarras?: string;
  descricao?: string;
  ativo: boolean;
}

export interface Categoria {
  id: string;
  nome: string;
  cor: string;
  icone: string;
}

export interface CarrinhoItem {
  id: string;
  produtoId: string;
  quantidade: number;
  precoUnitario: number;
  adicionadoEm: string;
  produto?: Produto;
}

// Dados iniciais - EM MEMÓRIA
let produtos: Produto[] = [
  // Bebidas
  { id: '1', nome: 'Coca-Cola 2L', preco: 8.50, estoque: 20, categoria: 'Bebidas', descricao: 'Refrigerante de cola', ativo: true },
  { id: '2', nome: 'Pepsi 2L', preco: 7.90, estoque: 15, categoria: 'Bebidas', descricao: 'Refrigerante de cola', ativo: true },
  { id: '3', nome: 'Água Mineral 500ml', preco: 2.50, estoque: 30, categoria: 'Bebidas', descricao: 'Água sem gás', ativo: true },
  
  // Doces
  { id: '4', nome: 'Chocolate ao Leite', preco: 4.50, estoque: 25, categoria: 'Doces', descricao: 'Tablete 90g', ativo: true },
  { id: '5', nome: 'Bala de Goma', preco: 1.20, estoque: 50, categoria: 'Doces', descricao: 'Pacote 100g', ativo: true },
  
  // Salgados
  { id: '6', nome: 'Coxinha', preco: 5.00, estoque: 10, categoria: 'Salgados', descricao: 'Unidade', ativo: true },
  { id: '7', nome: 'Pão de Queijo', preco: 0.80, estoque: 40, categoria: 'Salgados', descricao: 'Unidade', ativo: true },
  
  // Frutas
  { id: '8', nome: 'Maçã', preco: 1.20, estoque: 35, categoria: 'Frutas', descricao: 'Unidade', ativo: true },
  { id: '9', nome: 'Banana', preco: 0.80, estoque: 40, categoria: 'Frutas', descricao: 'Unidade', ativo: true },
  
  // Verduras
  { id: '10', nome: 'Alface', preco: 2.50, estoque: 20, categoria: 'Verduras', descricao: 'Unidade', ativo: true },
  { id: '11', nome: 'Tomate', preco: 3.80, estoque: 25, categoria: 'Verduras', descricao: 'Kg', ativo: true },
];

let carrinho: CarrinhoItem[] = [];

const categorias: Categoria[] = [
  { id: '1', nome: 'Bebidas', cor: '#3498db', icone: '🥤' },
  { id: '2', nome: 'Doces', cor: '#e74c3c', icone: '🍬' },
  { id: '3', nome: 'Salgados', cor: '#f39c12', icone: '🥨' },
  { id: '4', nome: 'Frutas', cor: '#2ecc71', icone: '🍎' },
  { id: '5', nome: 'Verduras', cor: '#27ae60', icone: '🥬' },
  { id: '6', nome: 'Frios', cor: '#9b59b6', icone: '🧀' },
  { id: '7', nome: 'Limpezas', cor: '#34495e', icone: '🧴' },
  { id: '8', nome: 'Açougue', cor: '#c0392b', icone: '🥩' },
  { id: '9', nome: 'Diversos', cor: '#7f8c8d', icone: '📦' },
];

// Funções do banco de dados - TODAS SÍNCRONAS/EM MEMÓRIA
export const database = {
  // Produtos
  buscarProdutos: async (categoria?: string, termo?: string): Promise<Produto[]> => {
    let resultado = produtos.filter(p => p.ativo);
    
    if (categoria) {
      resultado = resultado.filter(p => p.categoria === categoria);
    }
    
    if (termo) {
      resultado = resultado.filter(p => 
        p.nome.toLowerCase().includes(termo.toLowerCase())
      );
    }
    
    return resultado.sort((a, b) => a.nome.localeCompare(b.nome));
  },

  buscarProdutoPorId: async (id: string): Promise<Produto | null> => {
    return produtos.find(p => p.id === id && p.ativo) || null;
  },

  adicionarProduto: async (produto: Omit<Produto, 'id'>): Promise<string> => {
    const id = `prod_${Date.now()}`;
    const novoProduto: Produto = {
      ...produto,
      id
    };
    produtos.push(novoProduto);
    return id;
  },

  atualizarProduto: async (id: string, updates: Partial<Produto>): Promise<void> => {
    const index = produtos.findIndex(p => p.id === id);
    if (index !== -1) {
      produtos[index] = { ...produtos[index], ...updates };
    }
  },

  removerProduto: async (id: string): Promise<void> => {
    const index = produtos.findIndex(p => p.id === id);
    if (index !== -1) {
      produtos[index].ativo = false;
    }
  },

  // Categorias
  buscarCategorias: async (): Promise<Categoria[]> => {
    return categorias;
  },

  // Carrinho
  adicionarAoCarrinho: async (produtoId: string, quantidade: number, precoUnitario: number): Promise<void> => {
    const produto = produtos.find(p => p.id === produtoId);
    if (!produto) throw new Error('Produto não encontrado');
    if (produto.estoque < quantidade) throw new Error('Estoque insuficiente');

    // Atualizar estoque
    produto.estoque -= quantidade;

    // Adicionar ao carrinho
    const itemExistente = carrinho.find(item => item.produtoId === produtoId);
    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      carrinho.push({
        id: `cart_${Date.now()}`,
        produtoId,
        quantidade,
        precoUnitario,
        adicionadoEm: new Date().toISOString(),
        produto
      });
    }
  },

  buscarCarrinho: async (): Promise<(CarrinhoItem & { produto: Produto })[]> => {
    return carrinho.map(item => ({
      ...item,
      produto: produtos.find(p => p.id === item.produtoId)!
    })).filter(item => item.produto && item.produto.ativo);
  },

  atualizarQuantidadeCarrinho: async (id: string, quantidade: number): Promise<void> => {
    const item = carrinho.find(i => i.id === id);
    if (!item) return;

    const produto = produtos.find(p => p.id === item.produtoId);
    if (!produto) return;

    const diferenca = quantidade - item.quantidade;

    if (quantidade <= 0) {
      // Remover item
      await database.removerDoCarrinho(id);
    } else {
      // Atualizar quantidade
      if (produto.estoque < diferenca) {
        throw new Error('Estoque insuficiente');
      }

      produto.estoque -= diferenca;
      item.quantidade = quantidade;
    }
  },

  removerDoCarrinho: async (id: string): Promise<void> => {
    const item = carrinho.find(i => i.id === id);
    if (item) {
      const produto = produtos.find(p => p.id === item.produtoId);
      if (produto) {
        produto.estoque += item.quantidade;
      }
      carrinho = carrinho.filter(i => i.id !== id);
    }
  },

  limparCarrinho: async (): Promise<void> => {
    // Devolver estoque
    for (const item of carrinho) {
      const produto = produtos.find(p => p.id === item.produtoId);
      if (produto) {
        produto.estoque += item.quantidade;
      }
    }
    carrinho = [];
  },

  getQuantidadeCarrinho: async (): Promise<number> => {
    return carrinho.reduce((total, item) => total + item.quantidade, 0);
  }
};

console.log('✅ Banco de dados em memória carregado!');
console.log(`📦 ${produtos.length} produtos disponíveis`);
console.log(`🏷️ ${categorias.length} categorias carregadas`);