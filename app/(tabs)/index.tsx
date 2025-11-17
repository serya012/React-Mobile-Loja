import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { homeStyles as styles } from '../../style/homeStyles';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <ThemedText style={styles.titulo}>
            <MaterialIcons name="store" size={28} color="#fff" /> Mercadinho São João
          </ThemedText>
          <ThemedText style={styles.subtitle}>
            Tudo fresquinho com preço bom!
          </ThemedText>
        </View>

        <View style={styles.menuContainer}>
          <Link href="/catalogo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="grid-view" size={24} color="#fff" />
              </View>
              <View style={styles.textContainer}>
                <ThemedText style={styles.description} type="defaultSemiBold">Ver Todos os Produtos</ThemedText>
                <ThemedText style={styles.description}>
                  Nossa seleção completa
                </ThemedText>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/catalogo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="local-offer" size={24} color="#fff" />
              </View>
              <View style={styles.textContainer}>
                <ThemedText style={styles.description} type="defaultSemiBold">Promoções da Semana</ThemedText>
                <ThemedText style={styles.description}>
                  Os melhores preços
                </ThemedText>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/catalogo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="spa" size={24} color="#fff" />
              </View>
              <View style={styles.textContainer}>
                <ThemedText style={styles.description} type="defaultSemiBold">Hortifruti Fresco</ThemedText>
                <ThemedText style={styles.description}>
                  Frutas e verduras
                </ThemedText>
              </View>
            </TouchableOpacity>
          </Link>

         <Link href="/catalogo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="spa" size={24} color="#fff" />
              </View>
              <View style={styles.textContainer}>
                <ThemedText style={styles.description} type="defaultSemiBold">Hortifruti Fresco</ThemedText>
                <ThemedText style={styles.description}>
                  Frutas e verduras
                </ThemedText>
              </View>
            </TouchableOpacity>
          </Link>

        </View>

        <View style={styles.destaquesSection}>
          <ThemedText style={styles.description} type="subtitle">
            <Ionicons name="star" size={25} color="#ffc107" /> Destaques da Semana
          </ThemedText>
          <View style={styles.destaquesGrid}>
            <View style={styles.destaqueItem}>
              <MaterialIcons name="grain" size={25} color="#28a745" />
              <ThemedText style={styles.destaqueNome}>Feijão</ThemedText>
              <ThemedText style={styles.destaquePreco}>R$ 8,50</ThemedText>
            </View>
            <View style={styles.destaqueItem}>
              <MaterialIcons name="eco" size={24} color="#28a745" />
              <ThemedText style={styles.destaqueNome}>Tomate</ThemedText>
              <ThemedText style={styles.destaquePreco}>R$ 6,90</ThemedText>
            </View>
            <View style={styles.destaqueItem}>
              <MaterialIcons name="free-breakfast" size={24} color="#28a745" />
              <ThemedText style={styles.destaqueNome}>Café</ThemedText>
              <ThemedText style={styles.destaquePreco}>R$ 16,90</ThemedText>
            </View>
          </View>
        </View>

        <View style={styles.infoSection}>
          <ThemedText style={styles.infoText} type="subtitle">
            <MaterialIcons name="info" size={18} color="#28a745" /> Sobre Nós
          </ThemedText>
          <ThemedText style={styles.infoText}>
            <MaterialIcons name="location-on" size={14} color="#666" /> Rua do Comércio, 123 - Centro{'\n'}
            <MaterialIcons name="access-time" size={14} color="#666" /> Seg à Sex: 7h às 19h | Sáb: 7h às 13h{'\n'}
            <MaterialIcons name="phone" size={14} color="#666" /> (11) 9999-9999
          </ThemedText>
          <ThemedText style={styles.infoDestaque}>
            <MaterialIcons name="local-shipping" size={14} color="#28a745" /> Entrega grátis no bairro acima de R$ 50,00
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}