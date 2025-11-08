import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    FlatList,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';

interface ProdutoFavorito {
    id: string;
    nome: string;
    preco: number;
    imagem: string;
    categoria: string;
    quantidade: number;
}

// Dados estáticos de exemplo para favoritos
const favoritosIniciais: ProdutoFavorito[] = [
    {
        id: '1',
        nome: 'Café 3 Corações',
        preco: 16.90,
        imagem: '☕',
        categoria: 'mercearia',
        quantidade: 1
    },
    {
        id: '2', 
        nome: 'Leite Integral',
        preco: 5.20,
        imagem: '🥛',
        categoria: 'laticinios',
        quantidade: 2
    }
];

export default function FavoritosScreen() {
    const [favoritos, setFavoritos] = useState<ProdutoFavorito[]>(favoritosIniciais);
    
    const backgroundColor = useThemeColor({}, 'background');
    const textColor = useThemeColor({}, 'text');
    const cardColor = useThemeColor({}, 'card');
    const borderColor = useThemeColor({}, 'border');
    const primaryColor = useThemeColor({}, 'primary');
    const errorColor = useThemeColor({}, 'error');

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: backgroundColor,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingTop: 60,
            paddingBottom: 20,
            backgroundColor: backgroundColor,
            borderBottomWidth: 1,
            borderBottomColor: borderColor,
        },
        limparTexto: {
            color: errorColor,
            fontWeight: '600',
            fontSize: 14,
        },
        lista: {
            flex: 1,
        },
        listaConteudo: {
            padding: 20,
            paddingBottom: 120,
        },
        itemFavorito: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 16,
            marginBottom: 12,
            backgroundColor: cardColor,
            borderRadius: 16,
            borderLeftWidth: 4,
            borderLeftColor: primaryColor,
        },
        itemInfo: {
            flex: 1,
            marginRight: 12,
        },
        itemPreco: {
            fontSize: 14,
            color: textColor,
            opacity: 0.7,
            marginTop: 4,
            fontWeight: '500',
        },
        itemSubtotal: {
            fontSize: 15,
            fontWeight: '700',
            color: primaryColor,
            marginTop: 6,
        },
        controles: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
        },
        controleQuantidade: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: backgroundColor,
            borderRadius: 12,
            padding: 4,
        },
        botaoQuantidade: {
            width: 36,
            height: 36,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: primaryColor,
            borderRadius: 10,
        },
        botaoQuantidadeTexto: {
            color: cardColor,
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: 18,
        },
        quantidade: {
            marginHorizontal: 16,
            fontSize: 16,
            fontWeight: '700',
            minWidth: 24,
            textAlign: 'center',
            color: textColor,
        },
        botaoRemover: {
            padding: 10,
            backgroundColor: backgroundColor,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: errorColor,
        },
        botaoRemoverTexto: {
            fontSize: 18,
            color: errorColor,
        },
        favoritosVazio: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 40,
        },
        favoritosVazioTexto: {
            fontSize: 20,
            fontWeight: '700',
            marginBottom: 8,
            color: textColor,
            opacity: 0.7,
            textAlign: 'center',
        },
        favoritosVazioDescricao: {
            fontSize: 16,
            color: textColor,
            opacity: 0.5,
            marginBottom: 32,
            textAlign: 'center',
            lineHeight: 22,
        },
        botaoCatalogo: {
            backgroundColor: primaryColor,
            paddingHorizontal: 32,
            paddingVertical: 16,
            borderRadius: 12,
        },
        botaoCatalogoTexto: {
            color: cardColor,
            fontWeight: '600',
            fontSize: 16,
        },
        resumo: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: 24,
            backgroundColor: cardColor,
            borderTopWidth: 1,
            borderTopColor: borderColor,
        },
        totalTexto: {
            fontSize: 24,
            color: primaryColor,
            textAlign: 'center',
            marginBottom: 8,
            fontWeight: '700',
        },
        itensTexto: {
            textAlign: 'center',
            color: textColor,
            opacity: 0.7,
            marginBottom: 20,
            fontSize: 14,
            fontWeight: '500',
        },
        botaoFinalizar: {
            backgroundColor: primaryColor,
            padding: 18,
            borderRadius: 12,
            alignItems: 'center',
        },
        botaoFinalizarTexto: {
            color: cardColor,
            fontWeight: '600',
            fontSize: 16,
        },
    });

    const atualizarQuantidade = (id: string, novaQuantidade: number) => {
        if (novaQuantidade < 1) return;
        
        setFavoritos(prev => 
            prev.map(item => 
                item.id === id ? { ...item, quantidade: novaQuantidade } : item
            )
        );
    };

    const removerItem = (id: string) => {
        Alert.alert(
            'Remover Item',
            'Deseja remover este item dos favoritos?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Remover',
                    style: 'destructive',
                    onPress: () => {
                        setFavoritos(prev => prev.filter(item => item.id !== id));
                    }
                }
            ]
        );
    };

    const limparFavoritos = () => {
        Alert.alert(
            'Limpar Favoritos',
            'Deseja remover todos os itens dos favoritos?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Limpar',
                    style: 'destructive',
                    onPress: () => {
                        setFavoritos([]);
                    }
                }
            ]
        );
    };

    const calcularTotal = () => {
        return favoritos.reduce((total, item) =>
            total + (item.preco * item.quantidade), 0
        );
    };

    const ItemFavorito = ({ item }: { item: ProdutoFavorito }) => (
        <ThemedView style={styles.itemFavorito}>
            <View style={styles.itemInfo}>
                <ThemedText type="defaultSemiBold">{item.nome}</ThemedText>
                <ThemedText style={styles.itemPreco}>
                    R$ {item.preco.toFixed(2)} cada
                </ThemedText>
                <ThemedText style={styles.itemSubtotal}>
                    Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}
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

    return (
        <ThemedView style={styles.container}>
            <View style={styles.header}>
                <ThemedText type="title">⭐ Favoritos</ThemedText>
                {favoritos.length > 0 && (
                    <TouchableOpacity onPress={limparFavoritos}>
                        <ThemedText style={styles.limparTexto}>Limpar</ThemedText>
                    </TouchableOpacity>
                )}
            </View>

            {favoritos.length === 0 ? (
                <ThemedView style={styles.favoritosVazio}>
                    <ThemedText style={styles.favoritosVazioTexto}>
                        Sua lista de favoritos está vazia
                    </ThemedText>
                    <ThemedText style={styles.favoritosVazioDescricao}>
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
                        data={favoritos}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ItemFavorito item={item} />}
                        style={styles.lista}
                        contentContainerStyle={styles.listaConteudo}
                    />

                    <ThemedView style={styles.resumo}>
                        <ThemedText type="subtitle" style={styles.totalTexto}>
                            Total: R$ {calcularTotal().toFixed(2)}
                        </ThemedText>
                        <ThemedText style={styles.itensTexto}>
                            {favoritos.length} ite{favoritos.length > 1 ? 'ns' : 'm'} • {favoritos.reduce((total, item) => total + item.quantidade, 0)} unidades
                        </ThemedText>

                        <TouchableOpacity
                            style={styles.botaoFinalizar}
                            onPress={() => Alert.alert('Lista de Compras', 'Esta é sua lista de compras!')}
                        >
                            <ThemedText style={styles.botaoFinalizarTexto}>
                                📝 Lista de Compras
                            </ThemedText>
                        </TouchableOpacity>
                    </ThemedView>
                </>
            )}

        </ThemedView>
    );
}