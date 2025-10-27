import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

// 📱 EXPO ICONS - APENAS OS QUE EXISTEM
import { 
  Ionicons, 
  MaterialIcons, 
  FontAwesome, 
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  Feather,
  SimpleLineIcons 
} from '@expo/vector-icons';

export default function MegaExemploIcones() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🎯 MEGA LISTA DE ÍCONES EXPO</Text>

      {/* 📱 REDES SOCIAIS */}
      <Text style={styles.sectionTitle}>📱 Redes Sociais</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <FontAwesome name="facebook" size={30} color="#1877F2" />
          <Text style={styles.iconText}>Facebook</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome name="instagram" size={30} color="#E4405F" />
          <Text style={styles.iconText}>Instagram</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome name="twitter" size={30} color="#1DA1F2" />
          <Text style={styles.iconText}>Twitter</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome name="whatsapp" size={30} color="#25D366" />
          <Text style={styles.iconText}>WhatsApp</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome name="youtube" size={30} color="#FF0000" />
          <Text style={styles.iconText}>YouTube</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome name="github" size={30} color="#181717" />
          <Text style={styles.iconText}>GitHub</Text>
        </View>
      </View>

      {/* 🏠 CASA E ESTRUTURAS */}
      <Text style={styles.sectionTitle}>🏠 Casa e Estruturas</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <Ionicons name="home" size={30} color="#FF6B6B" />
          <Text style={styles.iconText}>Casa</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="building" size={30} color="#4ECDC4" />
          <Text style={styles.iconText}>Prédio</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="apartment" size={30} color="#45B7D1" />
          <Text style={styles.iconText}>Apartamento</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="hospital" size={30} color="#FF6B6B" />
          <Text style={styles.iconText}>Hospital</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="school" size={30} color="#FFD700" />
          <Text style={styles.iconText}>Escola</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="store" size={30} color="#98D8C8" />
          <Text style={styles.iconText}>Loja</Text>
        </View>
      </View>

      {/* 🚗 TRANSPORTE */}
      <Text style={styles.sectionTitle}>🚗 Transporte</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <FontAwesome5 name="car" size={30} color="#FF6B6B" />
          <Text style={styles.iconText}>Carro</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="motorcycle" size={30} color="#4ECDC4" />
          <Text style={styles.iconText}>Moto</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="bicycle" size={30} color="#45B7D1" />
          <Text style={styles.iconText}>Bicicleta</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="bus" size={30} color="#FFA07A" />
          <Text style={styles.iconText}>Ônibus</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="train" size={30} color="#FF6B6B" />
          <Text style={styles.iconText}>Trem</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="plane" size={30} color="#96CEB4" />
          <Text style={styles.iconText}>Avião</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="ship" size={30} color="#A1887F" />
          <Text style={styles.iconText}>Navio</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialCommunityIcons name="rocket" size={30} color="#FFD700" />
          <Text style={styles.iconText}>Foguete</Text>
        </View>
      </View>

      {/* 🍕 COMIDA E BEBIDA */}
      <Text style={styles.sectionTitle}>🍕 Comida e Bebida</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <FontAwesome5 name="pizza-slice" size={30} color="#FF6B6B" />
          <Text style={styles.iconText}>Pizza</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="hamburger" size={30} color="#FFA07A" />
          <Text style={styles.iconText}>Hambúrguer</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="ice-cream" size={30} color="#FFD700" />
          <Text style={styles.iconText}>Sorvete</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="cookie" size={30} color="#8B4513" />
          <Text style={styles.iconText}>Biscoito</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="coffee" size={30} color="#6F4E37" />
          <Text style={styles.iconText}>Café</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="beer" size={30} color="#FFD700" />
          <Text style={styles.iconText}>Cerveja</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="wine-glass-alt" size={30} color="#8B0000" />
          <Text style={styles.iconText}>Vinho</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="restaurant" size={30} color="#4ECDC4" />
          <Text style={styles.iconText}>Restaurante</Text>
        </View>
      </View>

      {/* ⚡ TECNOLOGIA */}
      <Text style={styles.sectionTitle}>⚡ Tecnologia</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <FontAwesome5 name="laptop" size={30} color="#61DAFB" />
          <Text style={styles.iconText}>Laptop</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="mobile-alt" size={30} color="#F7DF1E" />
          <Text style={styles.iconText}>Celular</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="tablet-alt" size={30} color="#3178C6" />
          <Text style={styles.iconText}>Tablet</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="computer" size={30} color="#3776AB" />
          <Text style={styles.iconText}>Computador</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="headset" size={30} color="#007396" />
          <Text style={styles.iconText}>Headset</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="keyboard" size={30} color="#E34F26" />
          <Text style={styles.iconText}>Teclado</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="mouse" size={30} color="#1572B6" />
          <Text style={styles.iconText}>Mouse</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="memory" size={30} color="#339933" />
          <Text style={styles.iconText}>Memória</Text>
        </View>
      </View>

      {/* 🎮 ENTRETENIMENTO */}
      <Text style={styles.sectionTitle}>🎮 Entretenimento</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <FontAwesome5 name="gamepad" size={30} color="#FF6B6B" />
          <Text style={styles.iconText}>Game</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="music" size={30} color="#4ECDC4" />
          <Text style={styles.iconText}>Música</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="film" size={30} color="#45B7D1" />
          <Text style={styles.iconText}>Filme</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="camera" size={30} color="#FFA07A" />
          <Text style={styles.iconText}>Câmera</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="sports-esports" size={30} color="#FF6B6B" />
          <Text style={styles.iconText}>Games</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="movie" size={30} color="#96CEB4" />
          <Text style={styles.iconText}>Cinema</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="headphones" size={30} color="#A1887F" />
          <Text style={styles.iconText}>Fones</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="mic" size={30} color="#FFD700" />
          <Text style={styles.iconText}>Microfone</Text>
        </View>
      </View>

      {/* 🛒 COMPRAS */}
      <Text style={styles.sectionTitle}>🛒 Compras</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <FontAwesome5 name="shopping-cart" size={30} color="#FF6B6B" />
          <Text style={styles.iconText}>Carrinho</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="credit-card" size={30} color="#4ECDC4" />
          <Text style={styles.iconText}>Cartão</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="receipt" size={30} color="#45B7D1" />
          <Text style={styles.iconText}>Recibo</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="payment" size={30} color="#FFA07A" />
          <Text style={styles.iconText}>Pagamento</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="account-balance" size={30} color="#FF6B6B" />
          <Text style={styles.iconText}>Banco</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="attach-money" size={30} color="#FFD700" />
          <Text style={styles.iconText}>Dinheiro</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="money-bill-wave" size={30} color="#98D8C8" />
          <Text style={styles.iconText}>Nota</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="discount" size={30} color="#FF6B6B" />
          <Text style={styles.iconText}>Desconto</Text>
        </View>
      </View>

      {/* ⚽ ESPORTES */}
      <Text style={styles.sectionTitle}>⚽ Esportes</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <FontAwesome5 name="futbol" size={30} color="#FF6B6B" />
          <Text style={styles.iconText}>Futebol</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="basketball-ball" size={30} color="#FF8C00" />
          <Text style={styles.iconText}>Basquete</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="tennis-ball" size={30} color="#FFD700" />
          <Text style={styles.iconText}>Tênis</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="baseball-ball" size={30} color="#8B4513" />
          <Text style={styles.iconText}>Baseball</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="football-ball" size={30} color="#8B0000" />
          <Text style={styles.iconText}>Futebol Am.</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="fitness-center" size={30} color="#4ECDC4" />
          <Text style={styles.iconText}>Academia</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="directions-bike" size={30} color="#45B7D1" />
          <Text style={styles.iconText}>Ciclismo</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="pool" size={30} color="#00BFFF" />
          <Text style={styles.iconText}>Natação</Text>
        </View>
      </View>

      {/* 🌤️ CLIMA */}
      <Text style={styles.sectionTitle}>🌤️ Clima</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <FontAwesome5 name="sun" size={30} color="#FFD700" />
          <Text style={styles.iconText}>Sol</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="moon" size={30} color="#7986CB" />
          <Text style={styles.iconText}>Lua</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="cloud" size={30} color="#90A4AE" />
          <Text style={styles.iconText}>Nuvem</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="cloud-rain" size={30} color="#4682B4" />
          <Text style={styles.iconText}>Chuva</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="snowflake" size={30} color="#B0E0E6" />
          <Text style={styles.iconText}>Neve</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="wind" size={30} color="#87CEEB" />
          <Text style={styles.iconText}>Vento</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="wb-sunny" size={30} color="#FF8C00" />
          <Text style={styles.iconText}>Ensolarado</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="ac-unit" size={30} color="#00BFFF" />
          <Text style={styles.iconText}>Frio</Text>
        </View>
      </View>

      {/* 🎯 EMOÇÕES */}
      <Text style={styles.sectionTitle}>🎯 Emoções</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <FontAwesome5 name="heart" size={30} color="red" />
          <Text style={styles.iconText}>Curtir</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="heart-broken" size={30} color="red" />
          <Text style={styles.iconText}>Descurtir</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="star" size={30} color="gold" />
          <Text style={styles.iconText}>Favorito</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="star-half-alt" size={30} color="gold" />
          <Text style={styles.iconText}>Meia Estrela</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="thumbs-up" size={30} color="green" />
          <Text style={styles.iconText}>Gostei</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="thumbs-down" size={30} color="red" />
          <Text style={styles.iconText}>Não Gostei</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="smile" size={30} color="#FFD700" />
          <Text style={styles.iconText}>Feliz</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="frown" size={30} color="#FF6B6B" />
          <Text style={styles.iconText}>Triste</Text>
        </View>
      </View>

      {/* 🔧 FERRAMENTAS */}
      <Text style={styles.sectionTitle}>🔧 Ferramentas</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <MaterialIcons name="settings" size={30} color="#666" />
          <Text style={styles.iconText}>Config</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="search" size={30} color="#666" />
          <Text style={styles.iconText}>Buscar</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="notifications" size={30} color="#666" />
          <Text style={styles.iconText}>Notificações</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="menu" size={30} color="#666" />
          <Text style={styles.iconText}>Menu</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="share" size={30} color="#666" />
          <Text style={styles.iconText}>Compartilhar</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="download" size={30} color="#666" />
          <Text style={styles.iconText}>Download</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="upload" size={30} color="#666" />
          <Text style={styles.iconText}>Upload</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="delete" size={30} color="#666" />
          <Text style={styles.iconText}>Deletar</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#2c3e50',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
    color: '#34495e',
    paddingLeft: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  iconItem: {
    width: '23%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconText: {
    marginTop: 8,
    fontSize: 11,
    textAlign: 'center',
    fontWeight: '600',
    color: '#2c3e50',
  },
});