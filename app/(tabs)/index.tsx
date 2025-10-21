import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HomeMenu() {
  return (
    <View style={styles.menuContainer}>
      <Link href="/catalogo" asChild>
        <TouchableOpacity style={styles.menuItem}>
          <ThemedView style={styles.iconContainer}>
            <ThemedText style={styles.icon}>🛍️</ThemedText>
          </ThemedView>
          <ThemedView style={styles.textContainer}>
            <ThemedText type="defaultSemiBold">Catálogo</ThemedText>
            <ThemedText style={styles.description}>Navegue e adicione produtos ao carrinho</ThemedText>
          </ThemedView>
        </TouchableOpacity>
      </Link>

      <Link href="/carrinho" asChild>
        <TouchableOpacity style={styles.menuItem}>
          <ThemedView style={styles.iconContainer}>
            <ThemedText style={styles.icon}>🛒</ThemedText>
          </ThemedView>
          <ThemedView style={styles.textContainer}>
            <ThemedText type="defaultSemiBold">Carrinho</ThemedText>
            <ThemedText style={styles.description}>Ver e gerenciar seus pedidos</ThemedText>
          </ThemedView>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.03)',
    borderRadius: 10,
    marginBottom: 8,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
  },
  description: {
    fontSize: 12,
    opacity: 0.7,
  },
});