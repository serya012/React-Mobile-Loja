export interface Produto {
  id: string;
  nome: string;
  preco: number;
  categoria: string;
  imagem: string;
  descricao: string;
  promocao?: boolean;
  unidade: string;
  marca?: string;
}

export const produtos: Produto[] = [
  // MERCEARIA
  {
    id: '1',
    nome: 'Arroz Camil 5kg',
    preco: 24.90,
    categoria: 'mercearia',
    imagem: '🍚',
    descricao: 'Arroz branco tipo 1',
    unidade: 'pacote 5kg',
    marca: 'Camil'
  },
  {
    id: '2',
    nome: 'Feijão Carioca',
    preco: 8.50,
    categoria: 'mercearia',
    imagem: '🫘',
    descricao: 'Feijão carioca especial',
    unidade: 'pacote 1kg',
    promocao: true,
    marca: 'Kicaldo'
  },
  {
    id: '3',
    nome: 'Açúcar Refinado',
    preco: 4.20,
    categoria: 'mercearia',
    imagem: '📦',
    descricao: 'Açúcar refinado',
    unidade: 'pacote 1kg',
    marca: 'União'
  },
  {
    id: '4',
    nome: 'Café 3 Corações',
    preco: 16.90,
    categoria: 'mercearia',
    imagem: '☕',
    descricao: 'Café torrado e moído',
    unidade: 'pacote 500g',
    promocao: true,
    marca: '3 Corações'
  },
  {
    id: '5',
    nome: 'Óleo de Soja',
    preco: 7.80,
    categoria: 'mercearia',
    imagem: '🫒',
    descricao: 'Óleo de soja',
    unidade: 'garrafa 900ml',
    marca: 'Liza'
  },
  {
    id: '6',
    nome: 'Macarrão Espaguete',
    preco: 3.50,
    categoria: 'mercearia',
    imagem: '🍝',
    descricao: 'Macarrão espaguete',
    unidade: 'pacote 500g',
    marca: 'Adria'
  },

  // LATICÍNIOS
  {
    id: '7',
    nome: 'Leite Integral',
    preco: 5.20,
    categoria: 'laticinios',
    imagem: '🥛',
    descricao: 'Leite integral',
    unidade: 'caixa 1L',
    marca: 'Piracanjuba'
  },
  {
    id: '8',
    nome: 'Mussarela',
    preco: 22.90,
    categoria: 'laticinios',
    imagem: '🧀',
    descricao: 'Queijo mussarela fatiado',
    unidade: 'pacote 500g',
    marca: 'Polengui'
  },
  {
    id: '9',
    nome: 'Manteiga',
    preco: 8.90,
    categoria: 'laticinios',
    imagem: '🧈',
    descricao: 'Manteiga com sal',
    unidade: 'tablete 200g',
    marca: 'Aviação'
  },

  // HORTIFRUTI
  {
    id: '10',
    nome: 'Banana Prata',
    preco: 4.90,
    categoria: 'hortifruti',
    imagem: '🍌',
    descricao: 'Banana prata fresca',
    unidade: 'kg',
    promocao: true
  },
  {
    id: '11',
    nome: 'Tomate',
    preco: 6.90,
    categoria: 'hortifruti',
    imagem: '🍅',
    descricao: 'Tomate vermelho',
    unidade: 'kg',
    promocao: true
  },
  {
    id: '12',
    nome: 'Alface Crespa',
    preco: 2.50,
    categoria: 'hortifruti',
    imagem: '🥬',
    descricao: 'Alface crespa fresca',
    unidade: 'unidade'
  },

  // PADARIA
  {
    id: '13',
    nome: 'Pão de Forma',
    preco: 9.90,
    categoria: 'padaria',
    imagem: '🍞',
    descricao: 'Pão de forma integral',
    unidade: 'pacote 500g',
    marca: 'Pullman'
  },
  {
    id: '14',
    nome: 'Biscoito Recheado',
    preco: 3.20,
    categoria: 'padaria',
    imagem: '🍪',
    descricao: 'Biscoito recheado chocolate',
    unidade: 'pacote 120g',
    marca: 'Oreo'
  },
  {
    id: '15',
    nome: 'Pão Francês',
    preco: 0.50,
    categoria: 'padaria',
    imagem: '🥖',
    descricao: 'Pão francês fresquinho',
    unidade: 'unidade',
    promocao: true
  },

  // BEBIDAS
  {
    id: '16',
    nome: 'Coca-Cola 2L',
    preco: 9.90,
    categoria: 'bebidas',
    imagem: '🥤',
    descricao: 'Refrigerante Coca-Cola',
    unidade: 'garrafa 2L',
    marca: 'Coca-Cola'
  },
  {
    id: '17',
    nome: 'Suco de Laranja',
    preco: 8.50,
    categoria: 'bebidas',
    imagem: '🧃',
    descricao: 'Suco de laranja natural',
    unidade: 'caixa 1L',
    marca: 'Del Valle'
  },
  {
    id: '18',
    nome: 'Água Mineral',
    preco: 2.50,
    categoria: 'bebidas',
    imagem: '💧',
    descricao: 'Água mineral sem gás',
    unidade: 'garrafa 500ml',
    marca: 'Crystal'
  },

  // LIMPEZA
  {
    id: '19',
    nome: 'Sabão em Pó',
    preco: 12.90,
    categoria: 'limpeza',
    imagem: '🧼',
    descricao: 'Sabão em pó',
    unidade: 'pacote 1kg',
    marca: 'Omo'
  },
  {
    id: '20',
    nome: 'Detergente',
    preco: 2.20,
    categoria: 'limpeza',
    imagem: '🧴',
    descricao: 'Detergente líquido',
    unidade: 'frasco 500ml',
    marca: 'Ypê'
  }
];

export const categorias = [
  { id: 'todos', nome: 'Todos', icone: '🛒' },
  { id: 'mercearia', nome: 'Mercearia', icone: '🍚' },
  { id: 'laticinios', nome: 'Laticínios', icone: '🧀' },
  { id: 'hortifruti', nome: 'Hortifruti', icone: '🍌' },
  { id: 'padaria', nome: 'Padaria', icone: '🍞' },
  { id: 'bebidas', nome: 'Bebidas', icone: '🥤' },
  { id: 'limpeza', nome: 'Limpeza', icone: '🧼' },
  { id: 'promocoes', nome: 'Promoções', icone: '🔥' }
];