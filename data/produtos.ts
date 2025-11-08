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



//    promocao: true,

export const produtos: Produto[] = [
  // === MERCEARIA (30 produtos) ===
  {
    id: 'm1', nome: 'Arroz Camil 5kg', preco: 24.90, categoria: 'mercearia', imagem: '🍚', descricao: 'Arroz branco tipo 1', unidade: 'pacote 5kg', marca: 'Camil'
  },
  {
    id: 'm2', nome: 'Feijão Carioca', preco: 8.50, categoria: 'mercearia', imagem: '🫘', descricao: 'Feijão carioca especial', unidade: 'pacote 1kg', promocao: true, marca: 'Kicaldo'
  },
  {
    id: 'm3', nome: 'Açúcar Refinado', preco: 4.20, categoria: 'mercearia', imagem: '📦', descricao: 'Açúcar refinado', unidade: 'pacote 1kg', marca: 'União'
  },
  {
    id: 'm4', nome: 'Café 3 Corações', preco: 16.90, categoria: 'mercearia', imagem: '☕', descricao: 'Café torrado e moído', unidade: 'pacote 500g', promocao: true, marca: '3 Corações'
  },
  {
    id: 'm5', nome: 'Óleo de Soja', preco: 7.80, categoria: 'mercearia', imagem: '🫒', descricao: 'Óleo de soja', unidade: 'garrafa 900ml', promocao: true, marca: 'Liza'
  },
  {
    id: 'm6', nome: 'Macarrão Espaguete', preco: 3.50, categoria: 'mercearia', imagem: '🍝', descricao: 'Macarrão espaguete', unidade: 'pacote 500g', promocao: true, marca: 'Adria'
  },
  {
    id: 'm7', nome: 'Farinha de Trigo', preco: 5.90, categoria: 'mercearia', imagem: '🌾', descricao: 'Farinha de trigo especial', unidade: 'pacote 1kg', promocao: true, marca: 'Dona Benta'
  },
  {
    id: 'm8', nome: 'Sal Refinado', preco: 2.50, categoria: 'mercearia', imagem: '🧂', descricao: 'Sal refinado iodado', unidade: 'pacote 1kg', marca: 'Cisne'
  },
  {
    id: 'm9', nome: 'Molho de Tomate', preco: 3.80, categoria: 'mercearia', imagem: '🥫', descricao: 'Molho de tomate tradicional', unidade: 'lata 340g', marca: 'Elefante'
  },
  {
    id: 'm10', nome: 'Extrato de Tomate', preco: 2.90, categoria: 'mercearia', imagem: '🥫', descricao: 'Extrato de tomate', unidade: 'lata 350g', marca: 'Extrato'
  },
  {
    id: 'm11', nome: 'Leite em Pó', preco: 18.90, categoria: 'mercearia', imagem: '🥛', descricao: 'Leite em pó integral', unidade: 'pacote 400g', marca: 'Itambé'
  },
  {
    id: 'm12', nome: 'Achocolatado', preco: 8.90, categoria: 'mercearia', imagem: '🍫', descricao: 'Achocolatado em pó', unidade: 'pacote 400g', marca: 'Toddy'
  },
  {
    id: 'm13', nome: 'Fubá', preco: 4.50, categoria: 'mercearia', imagem: '🌽', descricao: 'Fubá mimoso', unidade: 'pacote 1kg', marca: 'Yoki'
  },
  {
    id: 'm14', nome: 'Flocão de Milho', preco: 5.20, categoria: 'mercearia', imagem: '🌽', descricao: 'Flocão de milho', unidade: 'pacote 500g', marca: 'Yoki'
  },
  {
    id: 'm15', nome: 'Fermento em Pó', preco: 3.20, categoria: 'mercearia', imagem: '🧁', descricao: 'Fermento químico em pó', unidade: 'pacote 100g', marca: 'Royal'
  },
  {
    id: 'm16', nome: 'Gelatina', preco: 2.10, categoria: 'mercearia', imagem: '🍮', descricao: 'Gelatina sabor morango', unidade: 'caixa 25g', marca: 'Dr. Oetker'
  },
  {
    id: 'm17', nome: 'Coco Ralado', preco: 4.80, categoria: 'mercearia', imagem: '🥥', descricao: 'Coco ralado úmido', unidade: 'pacote 100g', marca: 'DuCoco'
  },
  {
    id: 'm18', nome: 'Amido de Milho', preco: 3.90, categoria: 'mercearia', imagem: '🌽', descricao: 'Amido de milho Maizena', unidade: 'pacote 200g', marca: 'Maizena'
  },
  {
    id: 'm19', nome: 'Ervilha em Conserva', preco: 5.60, categoria: 'mercearia', imagem: '🫛', descricao: 'Ervilha verde em conserva', unidade: 'lata 200g', marca: 'Quero'
  },
  {
    id: 'm20', nome: 'Milho Verde', preco: 4.90, categoria: 'mercearia', imagem: '🌽', descricao: 'Milho verde em conserva', unidade: 'lata 200g', marca: 'Quero'
  },
  {
    id: 'm21', nome: 'Sardinha', preco: 6.80, categoria: 'mercearia', imagem: '🐟', descricao: 'Sardinha em conserva', unidade: 'lata 125g', marca: 'Gomes da Costa'
  },
  {
    id: 'm22', nome: 'Atum', preco: 12.90, categoria: 'mercearia', imagem: '🐟', descricao: 'Atum sólido em óleo', unidade: 'lata 170g', marca: 'Gomes da Costa'
  },
  {
    id: 'm23', nome: 'Goiabada', preco: 8.50, categoria: 'mercearia', imagem: '🍈', descricao: 'Goiabada cascão', unidade: 'pacote 400g', marca: 'Bauducco'
  },
  {
    id: 'm24', nome: 'Doce de Leite', preco: 9.90, categoria: 'mercearia', imagem: '🥛', descricao: 'Doce de leite pastoso', unidade: 'pote 400g', marca: 'Itambé'
  },
  {
    id: 'm25', nome: 'Pipoca', preco: 3.40, categoria: 'mercearia', imagem: '🍿', descricao: 'Grão de pipoca', unidade: 'pacote 500g', marca: 'Yoki'
  },
  {
    id: 'm26', nome: 'Azeite de Oliva', preco: 22.90, categoria: 'mercearia', imagem: '🫒', descricao: 'Azeite extra virgem', unidade: 'garrafa 500ml', marca: 'Andorinha'
  },
  {
    id: 'm27', nome: 'Vinagre', preco: 3.20, categoria: 'mercearia', imagem: '🍶', descricao: 'Vinagre de álcool', unidade: 'garrafa 750ml', marca: 'Castelo'
  },
  {
    id: 'm28', nome: 'Mostarda', preco: 4.80, categoria: 'mercearia', imagem: '🟡', descricao: 'Mostarda tradicional', unidade: 'frasco 200g', marca: 'Hemmer'
  },
  {
    id: 'm29', nome: 'Maionese', preco: 5.90, categoria: 'mercearia', imagem: '🥫', descricao: 'Maionese tradicional', unidade: 'pote 500g', marca: 'Hellmanns'
  },
  {
    id: 'm30', nome: 'Ketchup', preco: 6.50, categoria: 'mercearia', imagem: '🍅', descricao: 'Ketchup tradicional', unidade: 'frasco 390g', marca: 'Hellmanns'
  },

  // === LATICÍNIOS (20 produtos) ===
  {
    id: 'l1', nome: 'Leite Integral', preco: 5.20, categoria: 'laticinios', imagem: '🥛', descricao: 'Leite integral', unidade: 'caixa 1L', marca: 'Piracanjuba'
  },
  {
    id: 'l2', nome: 'Mussarela', preco: 22.90, categoria: 'laticinios', imagem: '🧀', descricao: 'Queijo mussarela fatiado', unidade: 'pacote 500g', marca: 'Polengui'
  },
  {
    id: 'l3', nome: 'Manteiga', preco: 8.90, categoria: 'laticinios', imagem: '🧈', descricao: 'Manteiga com sal', unidade: 'tablete 200g', marca: 'Aviação'
  },
  {
    id: 'l4', nome: 'Iogurte Natural', preco: 4.50, categoria: 'laticinios', imagem: '🥤', descricao: 'Iogurte natural', unidade: 'pote 170g', marca: 'Nestlé'
  },
  {
    id: 'l5', nome: 'Requeijão', preco: 7.90, categoria: 'laticinios', imagem: '🧈', descricao: 'Requeijão cremoso', unidade: 'pote 200g', marca: 'Itambé'
  },
  {
    id: 'l6', nome: 'Leite Condensado', preco: 6.80, categoria: 'laticinios', imagem: '🥫', descricao: 'Leite condensado', unidade: 'lata 395g', marca: 'Moça'
  },
  {
    id: 'l7', nome: 'Creme de Leite', preco: 4.20, categoria: 'laticinios', imagem: '🥛', descricao: 'Creme de leite', unidade: 'caixa 200g', marca: 'Nestlé'
  },
  {
    id: 'l8', nome: 'Iogurte de Morango', preco: 4.80, categoria: 'laticinios', imagem: '🍓', descricao: 'Iogurte sabor morango', unidade: 'pote 170g', marca: 'Danone'
  },
  {
    id: 'l9', nome: 'Queijo Prato', preco: 28.90, categoria: 'laticinios', imagem: '🧀', descricao: 'Queijo prato fatiado', unidade: 'pacote 500g', marca: 'Vigor'
  },
  {
    id: 'l10', nome: 'Ricota', preco: 12.50, categoria: 'laticinios', imagem: '🧀', descricao: 'Ricota fresca', unidade: 'peça 250g', marca: 'Polengui'
  },
  {
    id: 'l11', nome: 'Iogurte Grego', preco: 6.90, categoria: 'laticinios', imagem: '🥛', descricao: 'Iogurte grego natural', unidade: 'pote 150g', marca: 'Nestlé'
  },
  {
    id: 'l12', nome: 'Coalhada', preco: 5.50, categoria: 'laticinios', imagem: '🥛', descricao: 'Coalhada seca', unidade: 'pote 200g', marca: 'Itambé'
  },
  {
    id: 'l13', nome: 'Queijo Minas', preco: 18.90, categoria: 'laticinios', imagem: '🧀', descricao: 'Queijo minas frescal', unidade: 'peça 400g', promocao: true
  },
  {
    id: 'l14', nome: 'Leite Desnatado', preco: 5.40, categoria: 'laticinios', imagem: '🥛', descricao: 'Leite desnatado', unidade: 'caixa 1L', marca: 'Piracanjuba'
  },
  {
    id: 'l15', nome: 'Manteiga sem Sal', preco: 9.20, categoria: 'laticinios', imagem: '🧈', descricao: 'Manteiga sem sal', unidade: 'tablete 200g', marca: 'Aviação'
  },
  {
    id: 'l16', nome: 'Queijo Cottage', preco: 11.90, categoria: 'laticinios', imagem: '🧀', descricao: 'Queijo cottage light', unidade: 'pote 200g', marca: 'Vigor'
  },
  {
    id: 'l17', nome: 'Iogurte Zero Lactose', preco: 5.60, categoria: 'laticinios', imagem: '🥛', descricao: 'Iogurte zero lactose', unidade: 'pote 170g', marca: 'Batavo'
  },
  {
    id: 'l18', nome: 'Leite Fermentado', preco: 3.90, categoria: 'laticinios', imagem: '🥛', descricao: 'Leite fermentado', unidade: 'caixinha 80g', marca: 'Yakult'
  },
  {
    id: 'l19', nome: 'Queijo Parmesão', preco: 34.90, categoria: 'laticinios', imagem: '🧀', descricao: 'Queijo parmesão ralado', unidade: 'pacote 100g', marca: 'Polengui'
  },
  {
    id: 'l20', nome: 'Cream Cheese', preco: 15.90, categoria: 'laticinios', imagem: '🧀', descricao: 'Cream cheese', unidade: 'pote 150g', marca: 'Philadelphia'
  },

  // === HORTIFRUTI (25 produtos) ===
  {
    id: 'h1', nome: 'Banana Prata', preco: 4.90, categoria: 'hortifruti', imagem: '🍌', descricao: 'Banana prata fresca', unidade: 'kg', promocao: true
  },
  {
    id: 'h2', nome: 'Tomate', preco: 6.90, categoria: 'hortifruti', imagem: '🍅', descricao: 'Tomate vermelho', unidade: 'kg', promocao: true
  },
  {
    id: 'h3', nome: 'Alface Crespa', preco: 2.50, categoria: 'hortifruti', imagem: '🥬', descricao: 'Alface crespa fresca', unidade: 'unidade'
  },
  {
    id: 'h4', nome: 'Cebola', preco: 5.50, categoria: 'hortifruti', imagem: '🧅', descricao: 'Cebola branca', unidade: 'kg'
  },
  {
    id: 'h5', nome: 'Batata', preco: 4.20, categoria: 'hortifruti', imagem: '🥔', descricao: 'Batata inglesa', unidade: 'kg'
  },
  {
    id: 'h6', nome: 'Maçã', preco: 8.90, categoria: 'hortifruti', imagem: '🍎', descricao: 'Maçã gala', unidade: 'kg'
  },
  {
    id: 'h7', nome: 'Laranja', preco: 3.90, categoria: 'hortifruti', imagem: '🍊', descricao: 'Laranja pera', unidade: 'kg'
  },
  {
    id: 'h8', nome: 'Cenoura', preco: 3.80, categoria: 'hortifruti', imagem: '🥕', descricao: 'Cenoura com folhas', unidade: 'kg'
  },
  {
    id: 'h9', nome: 'Pimentão', preco: 7.90, categoria: 'hortifruti', imagem: '🫑', descricao: 'Pimentão verde', unidade: 'kg'
  },
  {
    id: 'h10', nome: 'Abobrinha', preco: 5.60, categoria: 'hortifruti', imagem: '🥒', descricao: 'Abobrinha italiana', unidade: 'kg'
  },
  {
    id: 'h11', nome: 'Brócolis', preco: 8.50, categoria: 'hortifruti', imagem: '🥦', descricao: 'Brócolis ninja', unidade: 'maço'
  },
  {
    id: 'h12', nome: 'Couve-Flor', preco: 7.20, categoria: 'hortifruti', imagem: '🥦', descricao: 'Couve-flor branca', unidade: 'unidade'
  },
  {
    id: 'h13', nome: 'Repolho', preco: 4.80, categoria: 'hortifruti', imagem: '🥬', descricao: 'Repolho verde', unidade: 'unidade'
  },
  {
    id: 'h14', nome: 'Pepino', preco: 4.50, categoria: 'hortifruti', imagem: '🥒', descricao: 'Pepino japonês', unidade: 'kg'
  },
  {
    id: 'h15', nome: 'Mamão', preco: 6.90, categoria: 'hortifruti', imagem: '🍈', descricao: 'Mamão papaya', unidade: 'kg'
  },
  {
    id: 'h16', nome: 'Melancia', preco: 12.90, categoria: 'hortifruti', imagem: '🍉', descricao: 'Melancia sem semente', unidade: 'unidade'
  },
  {
    id: 'h17', nome: 'Uva', preco: 14.90, categoria: 'hortifruti', imagem: '🍇', descricao: 'Uva rubi', unidade: 'kg'
  },
  {
    id: 'h18', nome: 'Morango', preco: 16.90, categoria: 'hortifruti', imagem: '🍓', descricao: 'Morango orgânico', unidade: 'bandeja 300g'
  },
  {
    id: 'h19', nome: 'Abacaxi', preco: 8.90, categoria: 'hortifruti', imagem: '🍍', descricao: 'Abacaxi pérola', unidade: 'unidade'
  },
  {
    id: 'h20', nome: 'Manga', preco: 7.50, categoria: 'hortifruti', imagem: '🥭', descricao: 'Manga palmer', unidade: 'kg'
  },
  {
    id: 'h21', nome: 'Limão', preco: 3.20, categoria: 'hortifruti', imagem: '🍋', descricao: 'Limão tahiti', unidade: 'kg'
  },
  {
    id: 'h22', nome: 'Alho', preco: 18.90, categoria: 'hortifruti', imagem: '🧄', descricao: 'Alho nacional', unidade: 'kg'
  },
  {
    id: 'h23', nome: 'Batata Doce', preco: 5.90, categoria: 'hortifruti', imagem: '🍠', descricao: 'Batata doce rosada', unidade: 'kg'
  },
  {
    id: 'h24', nome: 'Berinjela', preco: 6.80, categoria: 'hortifruti', imagem: '🍆', descricao: 'Berinjela nacional', unidade: 'kg'
  },
  {
    id: 'h25', nome: 'Rúcula', preco: 3.90, categoria: 'hortifruti', imagem: '🥬', descricao: 'Rúcula fresca', unidade: 'maço'
  },

  // === PADARIA (20 produtos) ===
  {
    id: 'p1', nome: 'Pão de Forma', preco: 9.90, categoria: 'padaria', imagem: '🍞', descricao: 'Pão de forma integral', unidade: 'pacote 500g', marca: 'Pullman'
  },
  {
    id: 'p2', nome: 'Biscoito Recheado', preco: 3.20, categoria: 'padaria', imagem: '🍪', descricao: 'Biscoito recheado chocolate', unidade: 'pacote 120g', marca: 'Oreo'
  },
  {
    id: 'p3', nome: 'Pão Francês', preco: 0.50, categoria: 'padaria', imagem: '🥖', descricao: 'Pão francês fresquinho', unidade: 'unidade', promocao: true
  },
  {
    id: 'p4', nome: 'Bolo de Chocolate', preco: 12.90, categoria: 'padaria', imagem: '🍰', descricao: 'Bolo de chocolate caseiro', unidade: 'fatia'
  },
  {
    id: 'p5', nome: 'Croissant', preco: 4.50, categoria: 'padaria', imagem: '🥐', descricao: 'Croissant de manteiga', unidade: 'unidade'
  },
  {
    id: 'p6', nome: 'Rosca Doce', preco: 6.90, categoria: 'padaria', imagem: '🍩', descricao: 'Rosca doce com coco', unidade: 'unidade'
  },
  {
    id: 'p7', nome: 'Pão de Queijo', preco: 18.90, categoria: 'padaria', imagem: '🧀', descricao: 'Pão de queijo congelado', unidade: 'pacote 500g', marca: 'Fornac'
  },
  {
    id: 'p8', nome: 'Biscoito Cream Cracker', preco: 5.40, categoria: 'padaria', imagem: '🍘', descricao: 'Biscoito cream cracker', unidade: 'pacote 400g', marca: 'Marilan'
  },
  {
    id: 'p9', nome: 'Pão de Hot Dog', preco: 8.90, categoria: 'padaria', imagem: '🌭', descricao: 'Pão de hot dog', unidade: 'pacote 8 unidades', marca: 'Visconti'
  },
  {
    id: 'p10', nome: 'Pão de Hambúrguer', preco: 9.50, categoria: 'padaria', imagem: '🍔', descricao: 'Pão de hambúrguer', unidade: 'pacote 8 unidades', marca: 'Visconti'
  },
  {
    id: 'p11', nome: 'Biscoito Wafer', preco: 4.20, categoria: 'padaria', imagem: '🍫', descricao: 'Biscoito wafer chocolate', unidade: 'pacote 140g', marca: 'Nestlé'
  },
  {
    id: 'p12', nome: 'Torrada', preco: 7.80, categoria: 'padaria', imagem: '🍞', descricao: 'Torrada integral', unidade: 'pacote 200g', marca: 'Wickbold'
  },
  {
    id: 'p13', nome: 'Bolo de Laranja', preco: 14.90, categoria: 'padaria', imagem: '🍊', descricao: 'Bolo de laranja caseiro', unidade: 'fatia'
  },
  {
    id: 'p14', nome: 'Pão Sírio', preco: 11.90, categoria: 'padaria', imagem: '🥙', descricao: 'Pão sírio integral', unidade: 'pacote 5 unidades', marca: 'Massas Vilma'
  },
  {
    id: 'p15', nome: 'Biscoito Polvilho', preco: 6.50, categoria: 'padaria', imagem: '🥨', descricao: 'Biscoito de polvilho', unidade: 'pacote 200g', marca: 'Elma Chips'
  },
  {
    id: 'p16', nome: 'Pão de Centeio', preco: 15.90, categoria: 'padaria', imagem: '🍞', descricao: 'Pão de centeio integral', unidade: 'unidade 500g', marca: 'Pullman'
  },
  {
    id: 'p17', nome: 'Biscoito Maisena', preco: 4.80, categoria: 'padaria', imagem: '🍘', descricao: 'Biscoito maisena', unidade: 'pacote 200g', marca: 'Marilan'
  },
  {
    id: 'p18', nome: 'Rosquinha Coberta', preco: 8.90, categoria: 'padaria', imagem: '🍩', descricao: 'Rosquinha coberta com chocolate', unidade: 'pacote 300g', marca: 'Bauducco'
  },
  {
    id: 'p19', nome: 'Pão de Alho', preco: 12.90, categoria: 'padaria', imagem: '🧄', descricao: 'Pão de alho congelado', unidade: 'pacote 400g', marca: 'Fornac'
  },
  {
    id: 'p20', nome: 'Biscoito Água e Sal', preco: 5.20, categoria: 'padaria', imagem: '🍘', descricao: 'Biscoito água e sal', unidade: 'pacote 400g', marca: 'Triunfo'
  },

  // === BEBIDAS (25 produtos) ===
  {
    id: 'b1', nome: 'Coca-Cola 2L', preco: 9.90, categoria: 'bebidas', imagem: '🥤', descricao: 'Refrigerante Coca-Cola', unidade: 'garrafa 2L', marca: 'Coca-Cola'
  },
  {
    id: 'b2', nome: 'Suco de Laranja', preco: 8.50, categoria: 'bebidas', imagem: '🧃', descricao: 'Suco de laranja natural', unidade: 'caixa 1L', marca: 'Del Valle'
  },
  {
    id: 'b3', nome: 'Água Mineral', preco: 2.50, categoria: 'bebidas', imagem: '💧', descricao: 'Água mineral sem gás', unidade: 'garrafa 500ml', marca: 'Crystal'
  },
  {
    id: 'b4', nome: 'Cerveja Heineken', preco: 5.90, categoria: 'bebidas', imagem: '🍺', descricao: 'Cerveja Heineken long neck', unidade: 'garrafa 330ml', marca: 'Heineken'
  },
  {
    id: 'b5', nome: 'Guaraná Antarctica', preco: 8.90, categoria: 'bebidas', imagem: '🥤', descricao: 'Refrigerante Guaraná', unidade: 'garrafa 2L', marca: 'Ambev'
  },
  {
    id: 'b6', nome: 'Suco de Uva', preco: 11.90, categoria: 'bebidas', imagem: '🧃', descricao: 'Suco de uva integral', unidade: 'garrafa 1L', marca: 'Aurora'
  },
  {
    id: 'b7', nome: 'Água com Gás', preco: 3.20, categoria: 'bebidas', imagem: '💧', descricao: 'Água mineral com gás', unidade: 'garrafa 500ml', marca: 'Crystal'
  },
  {
    id: 'b8', nome: 'Cerveja Brahma', preco: 3.90, categoria: 'bebidas', imagem: '🍺', descricao: 'Cerveja Brahma lata', unidade: 'lata 350ml', marca: 'Ambev'
  },
  {
    id: 'b9', nome: 'Suco de Maçã', preco: 7.90, categoria: 'bebidas', imagem: '🧃', descricao: 'Suco de maçã integral', unidade: 'caixa 1L', marca: 'Del Valle'
  },
  {
    id: 'b10', nome: 'Energético Red Bull', preco: 12.90, categoria: 'bebidas', imagem: '🥤', descricao: 'Energético Red Bull', unidade: 'lata 250ml', marca: 'Red Bull'
  },
  {
    id: 'b11', nome: 'Refrigerante Fanta', preco: 8.50, categoria: 'bebidas', imagem: '🥤', descricao: 'Refrigerante Fanta Laranja', unidade: 'garrafa 2L', marca: 'Coca-Cola'
  },
  {
    id: 'b12', nome: 'Suco de Pêssego', preco: 6.90, categoria: 'bebidas', imagem: '🧃', descricao: 'Suco de pêssego', unidade: 'caixa 1L', marca: 'Maguary'
  },
  {
    id: 'b13', nome: 'Cerveja Skol', preco: 3.80, categoria: 'bebidas', imagem: '🍺', descricao: 'Cerveja Skol lata', unidade: 'lata 350ml', marca: 'Ambev'
  },
  {
    id: 'b14', nome: 'Água de Coco', preco: 5.90, categoria: 'bebidas', imagem: '🥥', descricao: 'Água de coco natural', unidade: 'caixa 1L', marca: 'Kero Coco'
  },
  {
    id: 'b15', nome: 'Refrigerante Sprite', preco: 8.40, categoria: 'bebidas', imagem: '🥤', descricao: 'Refrigerante Sprite', unidade: 'garrafa 2L', marca: 'Coca-Cola'
  },
  {
    id: 'b16', nome: 'Vinho Tinto', preco: 24.90, categoria: 'bebidas', imagem: '🍷', descricao: 'Vinho tinto seco', unidade: 'garrafa 750ml', marca: 'Canção'
  },
  {
    id: 'b17', nome: 'Suco de Maracujá', preco: 7.50, categoria: 'bebidas', imagem: '🧃', descricao: 'Suco de maracujá', unidade: 'caixa 1L', marca: 'Del Valle'
  },
  {
    id: 'b18', nome: 'Cerveja Corona', preco: 8.90, categoria: 'bebidas', imagem: '🍺', descricao: 'Cerveja Corona', unidade: 'garrafa 330ml', marca: 'Corona'
  },
  {
    id: 'b19', nome: 'Refrigerante Pepsi', preco: 8.20, categoria: 'bebidas', imagem: '🥤', descricao: 'Refrigerante Pepsi', unidade: 'garrafa 2L', marca: 'Pepsi'
  },
  {
    id: 'b20', nome: 'Suco de Goiaba', preco: 6.80, categoria: 'bebidas', imagem: '🧃', descricao: 'Suco de goiaba', unidade: 'caixa 1L', marca: 'Maguary'
  },
  {
    id: 'b21', nome: 'Cachaça', preco: 15.90, categoria: 'bebidas', imagem: '🍶', descricao: 'Cachaça prata', unidade: 'garrafa 1L', marca: '51'
  },
  {
    id: 'b22', nome: 'Energético TNT', preco: 8.90, categoria: 'bebidas', imagem: '🥤', descricao: 'Energético TNT', unidade: 'lata 269ml', marca: 'TNT'
  },
  {
    id: 'b23', nome: 'Refrigerante Schweppes', preco: 7.90, categoria: 'bebidas', imagem: '🥤', descricao: 'Refrigerante Schweppes Citrus', unidade: 'garrafa 2L', marca: 'Schweppes'
  },
  {
    id: 'b24', nome: 'Suco de Acerola', preco: 7.20, categoria: 'bebidas', imagem: '🧃', descricao: 'Suco de acerola', unidade: 'caixa 1L', marca: 'Del Valle'
  },
  {
    id: 'b25', nome: 'Cerveja Eisenbahn', preco: 9.90, categoria: 'bebidas', imagem: '🍺', descricao: 'Cerveja artesanal Eisenbahn', unidade: 'garrafa 600ml', marca: 'Eisenbahn'
  },

  // === LIMPEZA (20 produtos) ===
  {
    id: 'li1', nome: 'Sabão em Pó', preco: 12.90, categoria: 'limpeza', imagem: '🧼', descricao: 'Sabão em pó', unidade: 'pacote 1kg', marca: 'Omo'
  },
  {
    id: 'li2', nome: 'Detergente', preco: 2.20, categoria: 'limpeza', imagem: '🧴', descricao: 'Detergente líquido', unidade: 'frasco 500ml', marca: 'Ypê'
  },
  {
    id: 'li3', nome: 'Água Sanitária', preco: 3.80, categoria: 'limpeza', imagem: '🧴', descricao: 'Água sanitária', unidade: 'garrafa 1L', marca: 'Qboa'
  },
  {
    id: 'li4', nome: 'Desinfetante', preco: 6.50, categoria: 'limpeza', imagem: '🌿', descricao: 'Desinfetante pinho', unidade: 'garrafa 500ml', marca: 'Pinho Sol'
  },
  {
    id: 'li5', nome: 'Amaciante', preco: 11.90, categoria: 'limpeza', imagem: '🧴', descricao: 'Amaciante de roupas', unidade: 'garrafa 1L', marca: 'Comfort'
  },
  {
    id: 'li6', nome: 'Sabão em Barra', preco: 3.50, categoria: 'limpeza', imagem: '🧼', descricao: 'Sabão em barra', unidade: 'pacote 5 unidades', marca: 'OMO'
  },
  {
    id: 'li7', nome: 'Limpador Multiuso', preco: 8.90, categoria: 'limpeza', imagem: '🧴', descricao: 'Limpador multiuso', unidade: 'frasco 500ml', marca: 'Veja'
  },
  {
    id: 'li8', nome: 'Desengordurante', preco: 9.50, categoria: 'limpeza', imagem: '🧴', descricao: 'Desengordurante cozinha', unidade: 'frasco 500ml', marca: 'Cif'
  },
  {
    id: 'li9', nome: 'Álcool em Gel', preco: 12.90, categoria: 'limpeza', imagem: '🧴', descricao: 'Álcool em gel 70%', unidade: 'frasco 500ml', marca: 'Ypê'
  },
  {
    id: 'li10', nome: 'Lustra Móveis', preco: 14.90, categoria: 'limpeza', imagem: '🧴', descricao: 'Lustra móveis', unidade: 'frasco 500ml', marca: 'Prá-Tudo'
  },
  {
    id: 'li11', nome: 'Sabão Líquido', preco: 15.90, categoria: 'limpeza', imagem: '🧴', descricao: 'Sabão líquido para roupas', unidade: 'garrafa 1L', marca: 'OMO'
  },
  {
    id: 'li12', nome: 'Limpa Vidros', preco: 7.90, categoria: 'limpeza', imagem: '🧴', descricao: 'Limpa vidros', unidade: 'frasco 500ml', marca: 'Veja'
  },
  {
    id: 'li13', nome: 'Inseticida', preco: 16.90, categoria: 'limpeza', imagem: '🦟', descricao: 'Inseticida aerosol', unidade: 'lata 300ml', marca: 'Raid'
  },
]
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