import React, { useState } from 'react';
import { FlatList, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { produtos, categorias, Produto } from '../../data/produtos';
import { catalogoStyles as styles } from '../../style/catalogoStyles';

export default function CatalogoScreen() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');
  const [termoBusca, setTermoBusca] = useState('');

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
        <MaterialIcons name="shopping-basket" size={32} color="#28a745" />
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
              <ThemedText style={styles.promocaoTagTexto}>
                <MaterialIcons name="local-offer" size={10} color="#000" /> OFERTA
              </ThemedText>
            </ThemedView>
          )}
        </View>
      </View>
    </ThemedView>
  );

  const CategoriaItem = ({ categoria }: { categoria: typeof categorias[0] }) => {
    const getCategoryIcon = (id: string) => {
      switch(id) {
        case 'hortifruti': return <MaterialIcons name="spa" size={20} color="#28a745" />;
        case 'mercearia': return <FontAwesome5 name="wine-bottle" size={18} color="#28a745" />;
        case 'laticinios': return <MaterialIcons name="local-drink" size={20} color="#28a745" />;
        case 'bebidas': return <MaterialIcons name="local-bar" size={20} color="#28a745" />;
        case 'limpeza': return <MaterialIcons name="cleaning-services" size={20} color="#28a745" />;
        case 'promocoes': return <MaterialIcons name="local-offer" size={20} color="#dc3545" />;
        default: return <MaterialIcons name="category" size={20} color="#28a745" />;
      }
    };

    return (
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
        {getCategoryIcon(categoria.id)}
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
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.titulo}>
          <MaterialIcons name="storefront" size={24} color="#fff" /> Nosso Catálogo
        </ThemedText>
        <ThemedText style={styles.contador}>
          {produtosFiltrados.length} produto{produtosFiltrados.length !== 1 ? 's' : ''} encontrado{produtosFiltrados.length !== 1 ? 's' : ''}
        </ThemedText>
      </View>

      <View style={styles.buscaContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.buscaIcon} />
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar produtos..."
          value={termoBusca}
          onChangeText={setTermoBusca}
          placeholderTextColor="#999"
        />
        {termoBusca.length > 0 && (
          <TouchableOpacity
            style={styles.limparBusca}
            onPress={() => setTermoBusca('')}
          >
            <Ionicons name="close" size={16} color="#fff" />
          </TouchableOpacity>
        )}
      </View>

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

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProdutoCard item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listaProdutos}
        ListEmptyComponent={
          <ThemedView style={styles.vazio}>
            <Ionicons name="search-outline" size={48} color="#6c757d" />
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