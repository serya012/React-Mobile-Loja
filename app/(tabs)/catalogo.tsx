import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Categoria, database, Produto } from '../../lib/database';

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

      <Link href="/" style={styles.voltarLink}>
        <ThemedText type="link">← Voltar para o Início</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  carrinhoBtn: {
    padding: 8,
    backgroundColor: 'rgba(52, 152, 219, 0.1)',
    borderRadius: 8,
  },
  buscaInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#FFF',
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  categoriasContainer: {
    marginBottom: 16,
  },
  categoriaItem: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginRight: 8,
    minWidth: 80,
  },
  categoriaIcone: {
    fontSize: 20,
    marginBottom: 4,
  },
  categoriaNome: {
    fontSize: 12,
    textAlign: 'center',
  },
  categoriaSelecionada: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  listaProdutos: {
    paddingBottom: 20,
  },
  produtoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    backgroundColor: 'rgba(107, 142, 35, 0.05)',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#6B8E23',
  },
  produtoInfo: {
    flex: 1,
  },
  produtoNome: {
    fontSize: 16,
    marginBottom: 4,
  },
  produtoPreco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B8E23',
    marginBottom: 2,
  },
  produtoEstoque: {
    fontSize: 12,
    opacity: 0.7,
    marginBottom: 4,
  },
  produtoDescricao: {
    fontSize: 12,
    opacity: 0.6,
    fontStyle: 'italic',
  },
  botaoAdicionar: {
    backgroundColor: '#6B8E23',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  botaoDesabilitado: {
    backgroundColor: '#95a5a6',
  },
  botaoTexto: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  vazio: {
    alignItems: 'center',
    padding: 40,
    opacity: 0.5,
  },
  vazioTexto: {
    textAlign: 'center',
  },
  voltarLink: {
    marginTop: 20,
    padding: 16,
    alignItems: 'center',
  },
});