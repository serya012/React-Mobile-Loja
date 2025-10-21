import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import React, { useEffect, useState } from "react";
import {
    Alert,
    Button,
    FlatList,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { Categoria, database, Produto } from '../../lib/database';

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
        descricao: ""
    });

    useEffect(() => {
        carregarDados();
    }, []);

    const carregarDados = async () => {
        try {
            const [cats, prods] = await Promise.all([
                database.buscarCategorias(),
                database.buscarProdutos()
            ]);
            setCategorias(cats);
            setProdutos(prods);
        } catch (error) {
            Alert.alert('Erro', 'Erro ao carregar dados');
        } finally {
            setCarregando(false);
        }
    };

    const adicionarProduto = async () => {
        if (!novoProduto.nome.trim() || !novoProduto.preco || !novoProduto.estoque || !novoProduto.categoria) {
            Alert.alert("Erro", "Preencha nome, preço, estoque e categoria do produto");
            return;
        }

        try {
            await database.adicionarProduto({
                nome: novoProduto.nome,
                preco: parseFloat(novoProduto.preco),
                estoque: parseInt(novoProduto.estoque),
                categoria: novoProduto.categoria,
                codigoBarras: novoProduto.codigoBarras || undefined,
                descricao: novoProduto.descricao || undefined,
                ativo: true
            });

            Alert.alert("Sucesso", "Produto adicionado com sucesso!");
            setNovoProduto({ nome: "", preco: "", estoque: "", categoria: "", codigoBarras: "", descricao: "" });
            await carregarDados();
        } catch (error) {
            Alert.alert("Erro", "Erro ao adicionar produto");
        }
    };

    const removerProduto = async (produto: Produto) => {
        Alert.alert(
            "Remover Produto",
            `Deseja remover ${produto.nome}?`,
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Remover",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await database.removerProduto(produto.id);
                            Alert.alert("Sucesso", "Produto removido com sucesso!");
                            await carregarDados();
                        } catch (error) {
                            Alert.alert("Erro", "Erro ao remover produto");
                        }
                    }
                }
            ]
        );
    };

    const atualizarEstoque = async (produto: Produto, novoEstoque: number) => {
        try {
            await database.atualizarProduto(produto.id, { estoque: novoEstoque });
            await carregarDados();
        } catch (error) {
            Alert.alert("Erro", "Erro ao atualizar estoque");
        }
    };

    const valorTotalEstoque = produtos.reduce((acc, p) => acc + (p.preco * p.estoque), 0);

    const ProdutoItem = ({ item }: { item: Produto }) => {
        const categoria = categorias.find(cat => cat.nome === item.categoria);

        return (
            <ThemedView style={[
                styles.item,
                { borderLeftColor: categoria?.cor || '#7f8c8d' }
            ]}>
                <View style={styles.infoContainer}>
                    <ThemedText type="defaultSemiBold">{item.nome}</ThemedText>
                    <ThemedText style={styles.detalhes}>
                        Preço: R$ {item.preco.toFixed(2)} | Estoque: {item.estoque} uni.
                    </ThemedText>
                    <ThemedText style={styles.detalhes}>
                        Categoria: {item.categoria} | Total: R$ {(item.preco * item.estoque).toFixed(2)}
                    </ThemedText>
                    {item.codigoBarras && (
                        <ThemedText style={styles.codigoBarras}>Cód: {item.codigoBarras}</ThemedText>
                    )}
                    {item.descricao && (
                        <ThemedText style={styles.descricao}>Desc: {item.descricao}</ThemedText>
                    )}
                </View>

                <View style={styles.acoes}>
                    <View style={styles.controleEstoque}>
                        <TouchableOpacity
                            style={styles.botaoEstoque}
                            onPress={() => atualizarEstoque(item, item.estoque - 1)}
                        >
                            <ThemedText style={styles.botaoEstoqueTexto}>-</ThemedText>
                        </TouchableOpacity>
                        <ThemedText style={styles.estoqueNumero}>{item.estoque}</ThemedText>
                        <TouchableOpacity
                            style={styles.botaoEstoque}
                            onPress={() => atualizarEstoque(item, item.estoque + 1)}
                        >
                            <ThemedText style={styles.botaoEstoqueTexto}>+</ThemedText>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => removerProduto(item)} style={styles.removerBtn}>
                        <ThemedText style={styles.removerText}>🗑️</ThemedText>
                    </TouchableOpacity>
                </View>
            </ThemedView>
        );
    };

    if (carregando) {
        return (
            <ThemedView style={styles.container}>
                <ThemedText>Carregando...</ThemedText>
            </ThemedView>
        );
    }

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.header}>
                <ThemedText type="title">📦 Gestão de Produtos</ThemedText>
                <ThemedText style={styles.subtitle}>
                    Total em estoque: R$ {valorTotalEstoque.toFixed(2)}
                </ThemedText>
            </ThemedView>

            <ScrollView style={styles.scrollView}>
                <ThemedView style={styles.form}>
                    <ThemedText type="subtitle">Adicionar Novo Produto</ThemedText>

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

            <Link href="/" style={styles.voltarLink}>
                <ThemedText type="link">← Voltar para o Início</ThemedText>
            </Link>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    scrollView: {
        flex: 1,
    },
    header: {
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.7,
        marginTop: 5,
    },
    form: {
        gap: 12,
        marginBottom: 20,
        padding: 16,
        backgroundColor: 'rgba(107, 142, 35, 0.1)',
        borderRadius: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 8,
        padding: 12,
        backgroundColor: "#FFF",
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        gap: 10,
    },
    halfInput: {
        flex: 1,
    },
    categoriasScroll: {
        marginHorizontal: -4,
    },
    categoriasContainer: {
        flexDirection: 'row',
        gap: 8,
        paddingVertical: 4,
    },
    categoriaOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        gap: 6,
    },
    categoriaOptionIcon: {
        fontSize: 14,
    },
    categoriaOptionText: {
        fontSize: 12,
        fontWeight: '500',
    },
    categoriaOptionSelected: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    listaContainer: {
        marginBottom: 20,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: 16,
        marginVertical: 6,
        backgroundColor: "rgba(107, 142, 35, 0.05)",
        borderRadius: 8,
        borderLeftWidth: 4,
    },
    infoContainer: {
        flex: 1,
    },
    detalhes: {
        fontSize: 14,
        opacity: 0.7,
        marginTop: 2,
    },
    codigoBarras: {
        fontSize: 12,
        opacity: 0.5,
        marginTop: 2,
    },
    descricao: {
        fontSize: 12,
        opacity: 0.6,
        fontStyle: 'italic',
        marginTop: 2,
    },
    acoes: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    controleEstoque: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        borderRadius: 8,
        padding: 4,
    },
    botaoEstoque: {
        width: 28,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498db',
        borderRadius: 6,
    },
    botaoEstoqueTexto: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    estoqueNumero: {
        marginHorizontal: 10,
        fontSize: 14,
        fontWeight: 'bold',
        minWidth: 20,
        textAlign: 'center',
    },
    removerBtn: {
        padding: 8,
    },
    removerText: {
        fontSize: 18,
    },
    vazio: {
        alignItems: 'center',
        padding: 40,
        opacity: 0.5,
    },
    descricaoVazio: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 12,
    },
    voltarLink: {
        marginTop: 20,
        padding: 16,
        alignItems: 'center',
    },
});