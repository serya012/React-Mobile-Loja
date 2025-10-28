import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from '../../styles/index.styles';

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

