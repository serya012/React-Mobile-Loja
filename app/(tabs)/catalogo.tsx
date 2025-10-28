import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Categoria, database, Produto } from '../../lib/database';
import styles from '../../styles/catalogo.styles';

export default function CatalogoScreen() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>('');
  const [termoBusca, setTermoBusca] = useState('');
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarDados();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      buscarProdutos();
    }, termoBusca ? 300 : 0); // Delay apenas quando estiver digitando

    return () => clearTimeout(timeoutId);
  }, [categoriaSelecionada, termoBusca]);

  const carregarDados = async () => {
    try {
      // Carregar categorias primeiro pois é mais rápido
      const cats = await database.buscarCategorias();
      setCategorias(cats);
      
      // Depois carregar produtos
      const prods = await database.buscarProdutos();
      setProdutos(prods);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      Alert.alert('Erro', 'Erro ao carregar dados');
    } finally {
      setCarregando(false);
    }
  };

  const buscarProdutos = async () => {
    try {
      const resultados = await database.buscarProdutos(
        categoriaSelecionada || undefined,
        termoBusca || undefined
      );
      setProdutos(resultados);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao buscar produtos');
    }
  };

  const adicionarAoCarrinho = async (produto: Produto) => {
    try {
      if (produto.estoque <= 0) {
        Alert.alert('Erro', 'Produto sem estoque');
        return;
      }

      await database.adicionarAoCarrinho(produto.id, 1, produto.preco);
      Alert.alert('Sucesso', `${produto.nome} adicionado ao carrinho!`);

      // Atualizar estoque localmente
      setProdutos(prev => prev.map(p =>
        p.id === produto.id ? { ...p, estoque: p.estoque - 1 } : p
      ));
    } catch (error) {
      Alert.alert('Erro', 'Erro ao adicionar ao carrinho');
    }
  };

  const ProdutoCard = React.memo(({ item }: { item: Produto }) => (
    <ThemedView style={styles.produtoCard}>
      <View style={styles.produtoInfo}>
        <ThemedText type="defaultSemiBold" style={styles.produtoNome}>
          {item.nome}
        </ThemedText>
        <ThemedText style={styles.produtoPreco}>
          R$ {item.preco.toFixed(2)}
        </ThemedText>
        <ThemedText style={styles.produtoEstoque}>
          Estoque: {item.estoque} uni.
        </ThemedText>
        {item.descricao && (
          <ThemedText style={styles.produtoDescricao}>
            {item.descricao}
          </ThemedText>
        )}
      </View>

      <TouchableOpacity
        style={[
          styles.botaoAdicionar,
          item.estoque <= 0 && styles.botaoDesabilitado
        ]}
        onPress={() => adicionarAoCarrinho(item)}
        disabled={item.estoque <= 0}
      >
        <ThemedText style={styles.botaoTexto}>
          {item.estoque > 0 ? '🛒 Adicionar' : 'Sem Estoque'}
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  ));

  const CategoriaItem = ({ categoria }: { categoria: Categoria }) => (
    <TouchableOpacity
      style={[
        styles.categoriaItem,
        {
          backgroundColor: categoriaSelecionada === categoria.id
            ? categoria.cor
            : `${categoria.cor}20`
        }
      ]}
      onPress={() => setCategoriaSelecionada(
        categoriaSelecionada === categoria.id ? '' : categoria.id
      )}
    >
      <ThemedText style={styles.categoriaIcone}>{categoria.icone}</ThemedText>
      <ThemedText
        style={[
          styles.categoriaNome,
          categoriaSelecionada === categoria.id && styles.categoriaSelecionada
        ]}
      >
        {categoria.nome}
      </ThemedText>
    </TouchableOpacity>
  );

  if (carregando) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Carregando...</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ThemedText type="title">🛍️ Catálogo</ThemedText>
        <Link href="/carrinho" asChild>
          <TouchableOpacity style={styles.carrinhoBtn}>
            <ThemedText>🛒 Carrinho</ThemedText>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Barra de Busca */}
      <TextInput
        style={styles.buscaInput}
        placeholder="🔍 Buscar produtos..."
        value={termoBusca}
        onChangeText={setTermoBusca}
      />

      {/* Categorias */}
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        Categorias
      </ThemedText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriasContainer}
      >
        {categorias.map(categoria => (
          <CategoriaItem key={categoria.id} categoria={categoria} />
        ))}
      </ScrollView>

      {/* Produtos */}
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        Produtos ({produtos.length})
      </ThemedText>

      {produtos.length === 0 ? (
        <ThemedView style={styles.vazio}>
          <ThemedText style={styles.vazioTexto}>
            {termoBusca || categoriaSelecionada
              ? 'Nenhum produto encontrado'
              : 'Nenhum produto cadastrado'
            }
          </ThemedText>
        </ThemedView>
      ) : (
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProdutoCard item={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listaProdutos}
          maxToRenderPerBatch={5}
          windowSize={3}
          removeClippedSubviews={true}
          initialNumToRender={8}
          getItemLayout={(data, index) => ({
            length: 120,
            offset: 120 * index,
            index,
          })}
        />
      )}

    
    </ThemedView>
  );
}

