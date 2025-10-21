import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function PromocoesScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">🎯 Promoções</ThemedText>
        <ThemedText style={styles.subtitulo}>
          Crie e gerencie suas ofertas
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.criarPromocao}>
        <TouchableOpacity style={styles.botaoCriar}>
          <ThemedText style={styles.botaoCriarTexto}>
            🏷️ Criar Nova Promoção
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.promocoesAtivas}>
        <ThemedText type="subtitle">Promoções Ativas</ThemedText>
        <ThemedView style={styles.listaVazia}>
          <ThemedText style={styles.textoVazio}>Nenhuma promoção ativa</ThemedText>
          <ThemedText style={styles.descricaoVazia}>
            Crie sua primeira promoção para atrair mais clientes
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.dicas}>
        <ThemedText type="subtitle">💡 Ideias de Promoções</ThemedText>
        
        <ThemedView style={styles.dicaItem}>
          <ThemedText type="defaultSemiBold">🎉 Oferta Relâmpago</ThemedText>
          <ThemedText style={styles.dicaDescricao}>
            Desconto por tempo limitado
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.dicaItem}>
          <ThemedText type="defaultSemiBold">📦 Combo Especial</ThemedText>
          <ThemedText style={styles.dicaDescricao}>
            Venda produtos em conjunto
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.dicaItem}>
          <ThemedText type="defaultSemiBold">👥 Leve + Pague -</ThemedText>
          <ThemedText style={styles.dicaDescricao}>
            Promoção para itens em quantidade
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  subtitulo: {
    fontSize: 16,
    opacity: 0.7,
    marginTop: 4,
  },
  criarPromocao: {
    marginBottom: 24,
  },
  botaoCriar: {
    backgroundColor: '#e74c3c',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  botaoCriarTexto: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  promocoesAtivas: {
    marginBottom: 24,
  },
  listaVazia: {
    alignItems: 'center',
    padding: 40,
    opacity: 0.5,
  },
  textoVazio: {
    fontSize: 16,
    marginBottom: 8,
  },
  descricaoVazia: {
    textAlign: 'center',
    fontSize: 14,
  },
  dicas: {
    gap: 12,
  },
  dicaItem: {
    padding: 16,
    backgroundColor: 'rgba(241, 196, 15, 0.1)',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#f1c40f',
  },
  dicaDescricao: {
    marginTop: 4,
    fontSize: 14,
    opacity: 0.7,
  },
});