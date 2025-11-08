import React, { useState } from 'react';
import { FlatList, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { produtos, categorias, Produto } from '../../data/produtos';

export default function CatalogoScreen() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');
  const [termoBusca, setTermoBusca] = useState('');

  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const cardColor = useThemeColor({}, 'card');
  const borderColor = useThemeColor({}, 'border');
  const primaryColor = useThemeColor({}, 'primary');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
    },
    header: {
      paddingHorizontal: 20,
      paddingTop: 6,
      paddingBottom: 15,
      backgroundColor: backgroundColor,
      borderBottomWidth: 1,
      borderBottomColor: borderColor,
    },
    contador: {
      marginTop: 4,
      color: textColor,
      opacity: 0.7,
      fontSize: 14,
    },
    buscaContainer: {
      margin: 20,
      marginBottom: 10,
      position: 'relative',
    },
    buscaInput: {
      borderWidth: 1,
      borderColor: borderColor,
      borderRadius: 12,
      padding: 16,
      paddingRight: 45,
      backgroundColor: cardColor,
      fontSize: 16,
      color: textColor,
    },
    limparBusca: {
      position: 'absolute',
      right: 15,
      top: 15,
      backgroundColor: '#ccc',
      width: 24,
      height: 24,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    limparBuscaTexto: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
    categoriasContainer: {
      marginBottom: 20,
    },
    categoriasLista: {
      paddingHorizontal: 20,
      gap: 10,
    },
    categoriaItem: {
      alignItems: 'center',
      padding: 12,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: borderColor,
      minWidth: 75,
    },
    categoriaIcone: {
      fontSize: 18,
      marginBottom: 4,
    },
    categoriaNome: {
      fontSize: 11,
      textAlign: 'center',
      color: textColor,
      fontWeight: '500',
    },
    categoriaSelecionada: {
      color: backgroundColor,
      fontWeight: '600',
    },
    listaProdutos: {
      padding: 20,
      paddingBottom: 40,
      gap: 12,
    },
    produtoCard: {
      flexDirection: 'row',
      padding: 16,
      backgroundColor: cardColor,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: borderColor,
    },
    produtoPromocao: {
      borderColor: '#28a745',
      borderWidth: 2,
      backgroundColor: 'rgba(40, 167, 69, 0.05)',
    },
    produtoImagemContainer: {
      marginRight: 16,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    produtoImagem: {
      fontSize: 36,
    },
    promocaoBadge: {
      position: 'absolute',
      top: -8,
      right: -8,
      backgroundColor: '#dc3545',
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 10,
    },
    promocaoTexto: {
      color: '#fff',
      fontSize: 10,
      fontWeight: 'bold',
    },
    produtoInfo: {
      flex: 1,
    },
    produtoNome: {
      fontSize: 16,
      marginBottom: 2,
      color: textColor,
    },
    produtoMarca: {
      fontSize: 12,
      color: textColor,
      opacity: 0.6,
      marginBottom: 4,
      fontWeight: '500',
    },
    produtoDescricao: {
      fontSize: 13,
      color: textColor,
      opacity: 0.8,
      lineHeight: 16,
      marginBottom: 4,
    },
    produtoUnidade: {
      fontSize: 11,
      color: textColor,
      opacity: 0.5,
      marginBottom: 8,
      fontStyle: 'italic',
    },
    precoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    produtoPreco: {
      fontSize: 17,
      fontWeight: 'bold',
      color: primaryColor,
    },
    precoPromocao: {
      color: '#dc3545',
    },
    promocaoTag: {
      backgroundColor: '#ffc107',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 6,
    },
    promocaoTagTexto: {
      color: '#000',
      fontSize: 10,
      fontWeight: 'bold',
    },
    vazio: {
      alignItems: 'center',
      padding: 40,
      marginTop: 20,
    },
    vazioIcon: {
      fontSize: 48,
      marginBottom: 16,
      opacity: 0.5,
    },
    vazioTexto: {
      textAlign: 'center',
      color: textColor,
      opacity: 0.7,
      fontSize: 16,
      marginBottom: 8,
    },
    vazioDescricao: {
      textAlign: 'center',
      color: textColor,
      opacity: 0.5,
      fontSize: 14,
    },
  });

  // Filtrar produtos
  const produtosFiltrados = produtos.filter(produto => {
    const categoriaMatch =
      categoriaSelecionada === 'todos' ||
      (categoriaSelecionada === 'promocoes' ? produto.promocao : produto.categoria === categoriaSelecionada);

    const buscaMatch =
      termoBusca === '' ||
      produto.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
      produto.descricao.toLowerCase().includes(termoBusca.toLowerCase()) ||
      produto.marca?.toLowerCase().includes(termoBusca.toLowerCase());

    return categoriaMatch && buscaMatch;
  });

  const ProdutoCard = ({ item }: { item: Produto }) => (
    <ThemedView style={[
      styles.produtoCard,
      item.promocao && styles.produtoPromocao
    ]}>
      <View style={styles.produtoImagemContainer}>
        <ThemedText style={styles.produtoImagem}>{item.imagem}</ThemedText>
        {item.promocao && (
          <ThemedView style={styles.promocaoBadge}>
            <ThemedText style={styles.promocaoTexto}>PROMO</ThemedText>
          </ThemedView>
        )}
      </View>

      <View style={styles.produtoInfo}>
        <ThemedText type="defaultSemiBold" style={styles.produtoNome}>
          {item.nome}
        </ThemedText>

        {item.marca && (
          <ThemedText style={styles.produtoMarca}>
            {item.marca}
          </ThemedText>
        )}

        <ThemedText style={styles.produtoDescricao}>
          {item.descricao}
        </ThemedText>

        <ThemedText style={styles.produtoUnidade}>
          {item.unidade}
        </ThemedText>

        <View style={styles.precoContainer}>
          <ThemedText style={[
            styles.produtoPreco,
            item.promocao && styles.precoPromocao
          ]}>
            R$ {item.preco.toFixed(2).replace('.', ',')}
          </ThemedText>

          {item.promocao && (
            <ThemedView style={styles.promocaoTag}>
              <ThemedText style={styles.promocaoTagTexto}>🔥 OFERTA</ThemedText>
            </ThemedView>
          )}
        </View>
      </View>
    </ThemedView>
  );

  const CategoriaItem = ({ categoria }: { categoria: typeof categorias[0] }) => (
    <TouchableOpacity
      style={[
        styles.categoriaItem,
        {
          backgroundColor: categoriaSelecionada === categoria.id
            ? '#28a745'
            : 'transparent'
        }
      ]}
      onPress={() => setCategoriaSelecionada(categoria.id)}
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

  return (
    <ThemedView style={styles.container}>
      {/* Header */}


      {/* Barra de Busca */}
      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="🔍 Buscar"//colocar um icon
          value={termoBusca}
          onChangeText={setTermoBusca}
          placeholderTextColor="#999"
        />
        {termoBusca.length > 0 && (
          <TouchableOpacity
            style={styles.limparBusca}
            onPress={() => setTermoBusca('')}
          >
            <ThemedText style={styles.limparBuscaTexto}>✕</ThemedText>
          </TouchableOpacity>
        )}
      </View>

      {/* Categorias */}
      <View style={styles.categoriasContainer}>
        <FlatList
          horizontal
          data={categorias}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CategoriaItem categoria={item} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriasLista}
        />
      </View>

      {/* Produtos */}
      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProdutoCard item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listaProdutos}
        ListEmptyComponent={
          <ThemedView style={styles.vazio}>
            <ThemedText style={styles.vazioIcon}>🔍</ThemedText>
            <ThemedText style={styles.vazioTexto}>
              Nenhum produto encontrado
            </ThemedText>
            <ThemedText style={styles.vazioDescricao}>
              Tente buscar por outro termo ou categoria
            </ThemedText>
          </ThemedView>
        }
      />
    </ThemedView>
  );
}