import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import { database } from '../../lib/database';

interface CarrinhoComProduto {
    id: string;
    produtoId: string;
    quantidade: number;
    precoUnitario: number;
    adicionadoEm: string;
    produto?: {
        id: string;
        nome: string;
        preco: number;
        estoque: number;
        categoria: string;
    } | undefined;
}

export default function CarrinhoScreen() {
    const [itensCarrinho, setItensCarrinho] = useState<CarrinhoComProduto[]>([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        carregarCarrinho();
    }, []);

    const carregarCarrinho = async () => {
        try {
            const itens = await database.buscarCarrinho();
            setItensCarrinho(itens);
        } catch (error) {
            Alert.alert('Erro', 'Erro ao carregar carrinho');
        } finally {
            setCarregando(false);
        }
    };

    const atualizarQuantidade = async (id: string, novaQuantidade: number) => {
        try {
            await database.atualizarQuantidadeCarrinho(id, novaQuantidade);
            await carregarCarrinho();
        } catch (error) {
            Alert.alert('Erro', 'Erro ao atualizar quantidade');
        }
    };

    const removerItem = async (id: string) => {
        try {
            await database.removerDoCarrinho(id);
            await carregarCarrinho();
        } catch (error) {
            Alert.alert('Erro', 'Erro ao remover item');
        }
    };

    const limparCarrinho = async () => {
        Alert.alert(
            'Limpar Carrinho',
            'Deseja remover todos os itens do carrinho?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Limpar',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await database.limparCarrinho();
                            await carregarCarrinho();
                        } catch (error) {
                            Alert.alert('Erro', 'Erro ao limpar carrinho');
                        }
                    }
                }
            ]
        );
    };

    const finalizarCompra = async () => {
        if (itensCarrinho.length === 0) {
            Alert.alert('Carrinho vazio', 'Adicione produtos ao carrinho antes de finalizar');
            return;
        }

        Alert.alert(
            'Finalizar Compra',
            `Confirmar compra de ${itensCarrinho.length} itens no valor total de R$ ${calcularTotal().toFixed(2)}?`,
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Confirmar',
                    onPress: async () => {
                        try {
                            // Aqui você pode implementar a lógica de finalização da venda
                            await database.limparCarrinho();
                            Alert.alert('Sucesso', 'Compra finalizada com sucesso!');
                            await carregarCarrinho();
                        } catch (error) {
                            Alert.alert('Erro', 'Erro ao finalizar compra');
                        }
                    }
                }
            ]
        );
    };

    const calcularTotal = () => {
        return itensCarrinho.reduce((total, item) =>
            total + (item.precoUnitario * item.quantidade), 0
        );
    };

    const ItemCarrinho = ({ item }: { item: CarrinhoComProduto }) => (
        <ThemedView style={styles.itemCarrinho}>
            <View style={styles.itemInfo}>
                <ThemedText type="defaultSemiBold">{item.produto ? item.produto.nome : 'Produto removido'}</ThemedText>
                <ThemedText style={styles.itemPreco}>
                    R$ {item.precoUnitario.toFixed(2)} cada
                </ThemedText>
                <ThemedText style={styles.itemSubtotal}>
                    Subtotal: R$ {(item.precoUnitario * item.quantidade).toFixed(2)}
                </ThemedText>
            </View>

            <View style={styles.controles}>
                <View style={styles.controleQuantidade}>
                    <TouchableOpacity
                        style={styles.botaoQuantidade}
                        onPress={() => atualizarQuantidade(item.id, item.quantidade - 1)}
                    >
                        <ThemedText style={styles.botaoQuantidadeTexto}>-</ThemedText>
                    </TouchableOpacity>

                    <ThemedText style={styles.quantidade}>{item.quantidade}</ThemedText>

                    <TouchableOpacity
                        style={styles.botaoQuantidade}
                        onPress={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                    >
                        <ThemedText style={styles.botaoQuantidadeTexto}>+</ThemedText>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.botaoRemover}
                    onPress={() => removerItem(item.id)}
                >
                    <ThemedText style={styles.botaoRemoverTexto}>🗑️</ThemedText>
                </TouchableOpacity>
            </View>
        </ThemedView>
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
            <View style={styles.header}>
                <ThemedText type="title">🛒 Carrinho</ThemedText>
                {itensCarrinho.length > 0 && (
                    <TouchableOpacity onPress={limparCarrinho}>
                        <ThemedText style={styles.limparTexto}>Limpar</ThemedText>
                    </TouchableOpacity>
                )}
            </View>

            {itensCarrinho.length === 0 ? (
                <ThemedView style={styles.carrinhoVazio}>
                    <ThemedText style={styles.carrinhoVazioTexto}>
                        Seu carrinho está vazio
                    </ThemedText>
                    <ThemedText style={styles.carrinhoVazioDescricao}>
                        Adicione produtos pelo catálogo
                    </ThemedText>
                    <Link href="/catalogo" asChild>
                        <TouchableOpacity style={styles.botaoCatalogo}>
                            <ThemedText style={styles.botaoCatalogoTexto}>
                                📦 Ir para Catálogo
                            </ThemedText>
                        </TouchableOpacity>
                    </Link>
                </ThemedView>
            ) : (
                <>
                    <FlatList
                        data={itensCarrinho}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ItemCarrinho item={item} />}
                        style={styles.lista}
                        contentContainerStyle={styles.listaConteudo}
                    />

                    <ThemedView style={styles.resumo}>
                        <ThemedText type="subtitle" style={styles.totalTexto}>
                            Total: R$ {calcularTotal().toFixed(2)}
                        </ThemedText>
                        <ThemedText style={styles.itensTexto}>
                            {itensCarrinho.length} ite{itensCarrinho.length > 1 ? 'ns' : 'm'}
                        </ThemedText>

                        <TouchableOpacity
                            style={styles.botaoFinalizar}
                            onPress={finalizarCompra}
                        >
                            <ThemedText style={styles.botaoFinalizarTexto}>
                                💳 Finalizar Compra
                            </ThemedText>
                        </TouchableOpacity>
                    </ThemedView>
                </>
            )}

            <Link href="/catalogo" style={styles.voltarLink}>
                <ThemedText type="link">← Continuar Comprando</ThemedText>
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
    limparTexto: {
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    lista: {
        flex: 1,
    },
    listaConteudo: {
        paddingBottom: 20,
    },
    itemCarrinho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginBottom: 8,
        backgroundColor: 'rgba(52, 152, 219, 0.05)',
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#3498db',
    },
    itemInfo: {
        flex: 1,
    },
    itemPreco: {
        fontSize: 14,
        opacity: 0.7,
        marginTop: 2,
    },
    itemSubtotal: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2ecc71',
        marginTop: 4,
    },
    controles: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    controleQuantidade: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        borderRadius: 8,
        padding: 4,
    },
    botaoQuantidade: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498db',
        borderRadius: 6,
    },
    botaoQuantidadeTexto: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    quantidade: {
        marginHorizontal: 12,
        fontSize: 16,
        fontWeight: 'bold',
        minWidth: 20,
        textAlign: 'center',
    },
    botaoRemover: {
        padding: 8,
    },
    botaoRemoverTexto: {
        fontSize: 18,
    },
    carrinhoVazio: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    carrinhoVazioTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        opacity: 0.7,
    },
    carrinhoVazioDescricao: {
        fontSize: 14,
        opacity: 0.5,
        marginBottom: 20,
        textAlign: 'center',
    },
    botaoCatalogo: {
        backgroundColor: '#3498db',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
    },
    botaoCatalogoTexto: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    resumo: {
        padding: 16,
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        borderRadius: 12,
        marginTop: 16,
    },
    totalTexto: {
        fontSize: 20,
        color: '#2ecc71',
        textAlign: 'center',
        marginBottom: 4,
    },
    itensTexto: {
        textAlign: 'center',
        opacity: 0.7,
        marginBottom: 16,
    },
    botaoFinalizar: {
        backgroundColor: '#2ecc71',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    botaoFinalizarTexto: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    voltarLink: {
        marginTop: 20,
        padding: 16,
        alignItems: 'center',
    },
});