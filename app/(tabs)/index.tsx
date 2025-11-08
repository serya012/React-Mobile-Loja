import React from 'react';
import { ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function HomeScreen() {
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
    scrollView: {
      flex: 1,
    },
    header: {
      paddingHorizontal: 20,
      paddingTop: 60,
      paddingBottom: 20,
      backgroundColor: backgroundColor,
    },
    subtitle: {
      fontSize: 16,
      color: textColor,
      opacity: 0.7,
      marginTop: 8,
    },
    menuContainer: {
      padding: 20,
      gap: 12,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: cardColor,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: borderColor,
    },
    iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: primaryColor,
      marginRight: 16,
    },
    icon: {
      fontSize: 20,
      color: backgroundColor,
    },
    textContainer: {
      flex: 1,
    },
    description: {
      fontSize: 14,
      color: textColor,
      opacity: 0.7,
      marginTop: 4,
    },
    destaquesSection: {
      padding: 20,
      paddingTop: 0,
    },
    destaquesGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 12,
    },
    destaqueItem: {
      alignItems: 'center',
      padding: 16,
      backgroundColor: cardColor,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: borderColor,
      flex: 1,
      marginHorizontal: 4,
    },
    destaqueIcon: {
      fontSize: 24,
      marginBottom: 8,
    },
    destaqueNome: {
      fontSize: 12,
      color: textColor,
      marginBottom: 4,
      textAlign: 'center',
    },
    destaquePreco: {
      fontSize: 14,
      fontWeight: 'bold',
      color: primaryColor,
    },
    infoSection: {
      padding: 20,
      paddingTop: 0,
    },
    infoText: {
      fontSize: 14,
      color: textColor,
      opacity: 0.8,
      lineHeight: 20,
      marginBottom: 12,
    },
    infoDestaque: {
      fontSize: 14,
      color: primaryColor,
      fontWeight: '600',
    },
  });

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <ThemedText type="title">🛒 Mercadinho do Bairro</ThemedText>
          <ThemedText style={styles.subtitle}>
            Tudo fresquinho com preço bom!
          </ThemedText>
        </View>

        {/* Cards de Navegação */}
        <View style={styles.menuContainer}>
          <Link href="/catalogo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconContainer}>
                <ThemedText style={styles.icon}>📦</ThemedText>
              </View>
              <View style={styles.textContainer}>
                <ThemedText type="defaultSemiBold">Ver Todos os Produtos</ThemedText>
                <ThemedText style={styles.description}>
                  Nossa seleção completa
                </ThemedText>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/catalogo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconContainer}>
                <ThemedText style={styles.icon}>🔥</ThemedText>
              </View>
              <View style={styles.textContainer}>
                <ThemedText type="defaultSemiBold">Promoções da Semana</ThemedText>
                <ThemedText style={styles.description}>
                  Os melhores preços
                </ThemedText>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/catalogo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconContainer}>
                <ThemedText style={styles.icon}>🍌</ThemedText>
              </View>
              <View style={styles.textContainer}>
                <ThemedText type="defaultSemiBold">Hortifruti Fresco</ThemedText>
                <ThemedText style={styles.description}>
                  Frutas e verduras
                </ThemedText>
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Destaques */}
        <View style={styles.destaquesSection}>
          <ThemedText type="subtitle">⭐ Destaques da Semana</ThemedText>
          <View style={styles.destaquesGrid}>
            <View style={styles.destaqueItem}>
              <ThemedText style={styles.destaqueIcon}>🫘</ThemedText>
              <ThemedText style={styles.destaqueNome}>Feijão</ThemedText>
              <ThemedText style={styles.destaquePreco}>R$ 8,50</ThemedText>
            </View>
            <View style={styles.destaqueItem}>
              <ThemedText style={styles.destaqueIcon}>🍅</ThemedText>
              <ThemedText style={styles.destaqueNome}>Tomate</ThemedText>
              <ThemedText style={styles.destaquePreco}>R$ 6,90</ThemedText>
            </View>
            <View style={styles.destaqueItem}>
              <ThemedText style={styles.destaqueIcon}>☕</ThemedText>
              <ThemedText style={styles.destaqueNome}>Café</ThemedText>
              <ThemedText style={styles.destaquePreco}>R$ 16,90</ThemedText>
            </View>
          </View>
        </View>

        {/* Informações do Mercadinho */}
        <View style={styles.infoSection}>
          <ThemedText type="subtitle">ℹ️ Sobre Nós</ThemedText>
          <ThemedText style={styles.infoText}>
            📍 Rua do Comércio, 123 - Centro{'\n'}
            ⏰ Seg à Sex: 7h às 19h | Sáb: 7h às 13h{'\n'}
            📞 (11) 9999-9999
          </ThemedText>
          <ThemedText style={styles.infoDestaque}>
            🚚 Entrega grátis no bairro acima de R$ 50,00
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}