import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    FlatList,
    TouchableOpacity,
    View
} from 'react-native';
import { database } from '../../lib/database';
import styles from '../../styles/carrinho.styles';

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

        </ThemedView>
    );
}

