import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { exploreStyles as styles } from '../../style/exploreStyles';

export default function PromocoesScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">
          <MaterialIcons name="local-offer" size={24} color="#e74c3c" /> Promoções
        </ThemedText>
        <ThemedText style={styles.subtitulo}>
          Crie e gerencie suas ofertas
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.criarPromocao}>
        <TouchableOpacity style={styles.botaoCriar}>
          <MaterialIcons name="add-circle" size={20} color="#FFF" />
          <ThemedText style={styles.botaoCriarTexto}>
            Criar Nova Promoção
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.promocoesAtivas}>
        <ThemedText type="subtitle">Promoções Ativas</ThemedText>
        <ThemedView style={styles.listaVazia}>
          <Ionicons name="pricetag-outline" size={48} color="#6c757d" />
          <ThemedText style={styles.textoVazio}>Nenhuma promoção ativa</ThemedText>
          <ThemedText style={styles.descricaoVazia}>
            Crie sua primeira promoção para atrair mais clientes
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.dicas}>
        <ThemedText type="subtitle">
          <Ionicons name="bulb-outline" size={20} color="#f1c40f" /> Ideias de Promoções
        </ThemedText>
        
        <ThemedView style={styles.dicaItem}>
          <ThemedText type="defaultSemiBold">
            <MaterialIcons name="flash-on" size={16} color="#f1c40f" /> Oferta Relâmpago
          </ThemedText>
          <ThemedText style={styles.dicaDescricao}>
            Desconto por tempo limitado
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.dicaItem}>
          <ThemedText type="defaultSemiBold">
            <MaterialIcons name="all-inclusive" size={16} color="#f1c40f" /> Combo Especial
          </ThemedText>
          <ThemedText style={styles.dicaDescricao}>
            Venda produtos em conjunto
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.dicaItem}>
          <ThemedText type="defaultSemiBold">
            <MaterialIcons name="shopping-cart" size={16} color="#f1c40f" /> Leve + Pague -
          </ThemedText>
          <ThemedText style={styles.dicaDescricao}>
            Promoção para itens em quantidade
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}