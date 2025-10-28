import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React, { useEffect, useState } from "react";
import {
    Alert,
    Button,
    FlatList,
    ScrollView,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { Categoria, database, Produto } from '../../lib/database';
import styles from '../../styles/produtos.styles';

export default function GestaoProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [carregando, setCarregando] = useState(true);

    const [novoProduto, setNovoProduto] = useState({
        nome: "",
        preco: "",
        estoque: "",
        categoria: "",
        codigoBarras: "",
        descricao: "",
    });

    useEffect(() => {
        carregarDados();
    }, []);

    async function carregarDados() {
        setCarregando(true);
        try {
            const cats = await database.buscarCategorias();
            setCategorias(cats || []);
            const prods = await database.buscarProdutos();
            setProdutos(prods || []);
        } catch (e) {
            console.error(e);
        } finally {
            setCarregando(false);
        }
    }

    async function adicionarProduto() {
        if (!novoProduto.nome || !novoProduto.preco) {
            Alert.alert('Erro', 'Nome e preço são obrigatórios');
            return;
        }
        const preco = parseFloat(novoProduto.preco.replace(',', '.')) || 0;
        try {
            await database.adicionarProduto({
                id: String(Date.now()),
                nome: novoProduto.nome,
                preco: preco,
                estoque: parseInt(novoProduto.estoque || '0', 10) || 0,
                categoria: novoProduto.categoria || '',
                codigoBarras: novoProduto.codigoBarras || '',
                descricao: novoProduto.descricao || '',
            } as unknown as Produto);
            setNovoProduto({ nome: '', preco: '', estoque: '', categoria: '', codigoBarras: '', descricao: '' });
            carregarDados();
        } catch (e) {
            console.error(e);
            Alert.alert('Erro', 'Não foi possível adicionar o produto');
        }
    }

    async function removerProduto(id: string) {
        try {
            await database.removerProduto(id);
            carregarDados();
        } catch (e) {
            console.error(e);
        }
    }

    function ProdutoItem({ item }: { item: Produto }) {
        return (
            <ThemedView style={styles.item}>
                <View style={styles.infoContainer}>
                    <ThemedText>{item.nome}</ThemedText>
                    <ThemedText style={styles.detalhes}>R$ {item.preco}</ThemedText>
                    {item.codigoBarras ? <ThemedText style={styles.codigoBarras}>{item.codigoBarras}</ThemedText> : null}
                    {item.descricao ? <ThemedText style={styles.descricao}>{item.descricao}</ThemedText> : null}
                </View>
                <View style={styles.acoes}>
                    <View style={styles.controleEstoque}>
                        <TouchableOpacity style={styles.botaoEstoque} onPress={async () => { await database.atualizarProduto(item.id, { estoque: (item.estoque - 1) }); carregarDados(); }}>
                            <ThemedText style={styles.botaoEstoqueTexto}>-</ThemedText>
                        </TouchableOpacity>
                        <ThemedText style={styles.estoqueNumero}>{item.estoque}</ThemedText>
                        <TouchableOpacity style={styles.botaoEstoque} onPress={async () => { await database.atualizarProduto(item.id, { estoque: (item.estoque + 1) }); carregarDados(); }}>
                            <ThemedText style={styles.botaoEstoqueTexto}>+</ThemedText>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.removerBtn} onPress={() => removerProduto(item.id)}>
                        <ThemedText style={styles.removerText}>🗑️</ThemedText>
                    </TouchableOpacity>
                </View>
            </ThemedView>
        );
    }

    return (
        <ThemedView style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={{ padding: 20 }}>
                <ThemedView style={styles.header}>
                    <ThemedText type="title">Gestão de Produtos</ThemedText>
                    <ThemedText type="subtitle" style={styles.subtitle}>Adicione e gerencie produtos</ThemedText>
                </ThemedView>

                <ThemedView style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do produto"
                        value={novoProduto.nome}
                        onChangeText={(text) => setNovoProduto({ ...novoProduto, nome: text })}
                    />

                    <View style={styles.row}>
                        <TextInput
                            style={[styles.input, styles.halfInput]}
                            placeholder="Preço (R$)"
                            value={novoProduto.preco}
                            onChangeText={(text) => setNovoProduto({ ...novoProduto, preco: text })}
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={[styles.input, styles.halfInput]}
                            placeholder="Estoque"
                            value={novoProduto.estoque}
                            onChangeText={(text) => setNovoProduto({ ...novoProduto, estoque: text })}
                            keyboardType="numeric"
                        />
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.categoriasScroll}
                    >
                        <View style={styles.categoriasContainer}>
                            {categorias.map(categoria => (
                                <TouchableOpacity
                                    key={categoria.id}
                                    style={[
                                        styles.categoriaOption,
                                        {
                                            backgroundColor: novoProduto.categoria === categoria.nome
                                                ? categoria.cor
                                                : `${categoria.cor}20`
                                        }
                                    ]}
                                    onPress={() => setNovoProduto({ ...novoProduto, categoria: categoria.nome })}
                                >
                                    <ThemedText style={styles.categoriaOptionIcon}>{categoria.icone}</ThemedText>
                                    <ThemedText
                                        style={[
                                            styles.categoriaOptionText,
                                            novoProduto.categoria === categoria.nome && styles.categoriaOptionSelected
                                        ]}
                                    >
                                        {categoria.nome}
                                    </ThemedText>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>

                    <TextInput
                        style={styles.input}
                        placeholder="Código de barras (opcional)"
                        value={novoProduto.codigoBarras}
                        onChangeText={(text) => setNovoProduto({ ...novoProduto, codigoBarras: text })}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Descrição (opcional)"
                        value={novoProduto.descricao}
                        onChangeText={(text) => setNovoProduto({ ...novoProduto, descricao: text })}
                        multiline
                    />

                    <Button title="➕ Adicionar Produto" onPress={adicionarProduto} color="#6B8E23" />
                </ThemedView>

                <ThemedView style={styles.listaContainer}>
                    <ThemedText type="subtitle">Produtos Cadastrados ({produtos.length})</ThemedText>

                    {produtos.length === 0 ? (
                        <ThemedView style={styles.vazio}>
                            <ThemedText>Nenhum produto cadastrado</ThemedText>
                            <ThemedText style={styles.descricaoVazio}>
                                Adicione seus primeiros produtos para começar a gerenciar seu estoque
                            </ThemedText>
                        </ThemedView>
                    ) : (
                        <FlatList
                            data={produtos}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <ProdutoItem item={item} />}
                            scrollEnabled={false}
                        />
                    )}
                </ThemedView>
            </ScrollView>

        </ThemedView>
    );
}