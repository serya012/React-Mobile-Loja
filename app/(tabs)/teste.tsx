import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// 📱 TODOS OS TIPOS DE ÍCONES DISPONÍVEIS
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons
} from '@expo/vector-icons';

export default function TodosOsIcones() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🎯 TODOS OS TIPOS DE ÍCONES</Text>

      {/* 1. IONICONS (iOS Style) */}
      <Text style={styles.sectionTitle}>1. Ionicons (iOS)</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <Ionicons name="home" size={30} color="#007AFF" />
          <Text style={styles.iconText}>home</Text>
        </View>
        <View style={styles.iconItem}>
          <Ionicons name="heart" size={30} color="red" />
          <Text style={styles.iconText}>heart</Text>
        </View>
        <View style={styles.iconItem}>
          <Ionicons name="settings" size={30} color="#666" />
          <Text style={styles.iconText}>settings</Text>
        </View>
        <View style={styles.iconItem}>
          <Ionicons name="notifications" size={30} color="orange" />
          <Text style={styles.iconText}>notifications</Text>
        </View>
      </View>

      {/* 2. MATERIAL ICONS (Android Style) */}
      <Text style={styles.sectionTitle}>2. Material Icons</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <MaterialIcons name="favorite" size={30} color="red" />
          <Text style={styles.iconText}>favorite</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="star" size={30} color="gold" />
          <Text style={styles.iconText}>star</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="shopping-cart" size={30} color="green" />
          <Text style={styles.iconText}>shopping-cart</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialIcons name="person" size={30} color="blue" />
          <Text style={styles.iconText}>person</Text>
        </View>
      </View>

      {/* 3. FONT AWESOME 5 (Moderno) */}
      <Text style={styles.sectionTitle}>3. Font Awesome 5</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <FontAwesome5 name="react" size={30} color="#61DAFB" />
          <Text style={styles.iconText}>react</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="github" size={30} color="#333" />
          <Text style={styles.iconText}>github</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="js" size={30} color="#F7DF1E" />
          <Text style={styles.iconText}>js</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="python" size={30} color="#3776AB" />
          <Text style={styles.iconText}>python</Text>
        </View>
      </View>

      {/* 4. MATERIAL COMMUNITY ICONS (Muito Completo) */}
      <Text style={styles.sectionTitle}>4. Material Community</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <MaterialCommunityIcons name="robot" size={30} color="#666" />
          <Text style={styles.iconText}>robot</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialCommunityIcons name="gamepad-variant" size={30} color="purple" />
          <Text style={styles.iconText}>gamepad</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialCommunityIcons name="car-sports" size={30} color="red" />
          <Text style={styles.iconText}>car-sports</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialCommunityIcons name="airplane" size={30} color="blue" />
          <Text style={styles.iconText}>airplane</Text>
        </View>
      </View>

      {/* 5. ANT DESIGN (Elegante) */}
      <Text style={styles.sectionTitle}>5. Ant Design</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <AntDesign name="like" size={30} color="BLACK" />
          <Text style={styles.iconText}>like</Text>
        </View>
        <View style={styles.iconItem}>
          <AntDesign name="dislike" size={30} color="#000000ff" />
          <Text style={styles.iconText}>dislike</Text>
        </View>
        <View style={styles.iconItem}>
          <AntDesign name="star" size={30} color="gold" />
          <Text style={styles.iconText}>star</Text>
        </View>
        <View style={styles.iconItem}>
          <AntDesign name="heart" size={30} color="red" />
          <Text style={styles.iconText}>heart</Text>
        </View>
      </View>

      {/* 6. FEATHER (Minimalista) */}
      <Text style={styles.sectionTitle}>6. Feather</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <Feather name="feather" size={30} color="#42466fff" />
          <Text style={styles.iconText}>feather</Text>
        </View>
        <View style={styles.iconItem}>
          <Feather name="code" size={30} color="green" />
          <Text style={styles.iconText}>code</Text>
        </View>
        <View style={styles.iconItem}>
          <Feather name="cloud" size={30} color="blue" />
          <Text style={styles.iconText}>cloud</Text>
        </View>
        <View style={styles.iconItem}>
          <Feather name="sun" size={30} color="orange" />
          <Text style={styles.iconText}>sun</Text>
        </View>
      </View>

      {/* 7. ENTYPO (Diferente) */}
      <Text style={styles.sectionTitle}>7. Entypo</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <Entypo name="game-controller" size={30} color="purple" />
          <Text style={styles.iconText}>game-controller</Text>
        </View>
        <View style={styles.iconItem}>
          <Entypo name="drink" size={30} color="brown" />
          <Text style={styles.iconText}>drink</Text>
        </View>
        <View style={styles.iconItem}>
          <Entypo name="rocket" size={30} color="red" />
          <Text style={styles.iconText}>rocket</Text>
        </View>
        <View style={styles.iconItem}>
          <Entypo name="tools" size={30} color="#666" />
          <Text style={styles.iconText}>tools</Text>
        </View>
      </View>

      {/* 8. SIMPLE LINE ICONS (Fino) */}
      <Text style={styles.sectionTitle}>8. Simple Line</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <SimpleLineIcons name="user" size={30} color="blue" />
          <Text style={styles.iconText}>user</Text>
        </View>
        <View style={styles.iconItem}>
          <SimpleLineIcons name="heart" size={30} color="red" />
          <Text style={styles.iconText}>heart</Text>
        </View>
        <View style={styles.iconItem}>
          <SimpleLineIcons name="star" size={30} color="gold" />
          <Text style={styles.iconText}>star</Text>
        </View>
        <View style={styles.iconItem}>
          <SimpleLineIcons name="settings" size={30} color="#666" />
          <Text style={styles.iconText}>settings</Text>
        </View>
      </View>

      {/* 9. OCTICONS (GitHub Style) */}
      <Text style={styles.sectionTitle}>9. Octicons</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <Octicons name="mark-github" size={30} color="#333" />
          <Text style={styles.iconText}>mark-github</Text>
        </View>
        <View style={styles.iconItem}>
          <Octicons name="code" size={30} color="green" />
          <Text style={styles.iconText}>code</Text>
        </View>
        <View style={styles.iconItem}>
          <Octicons name="bug" size={30} color="red" />
          <Text style={styles.iconText}>bug</Text>
        </View>
        <View style={styles.iconItem}>
          <Octicons name="package" size={30} color="orange" />
          <Text style={styles.iconText}>package</Text>
        </View>
      </View>

      {/* 10. FOUNDATION (Forte) */}
      <Text style={styles.sectionTitle}>10. Foundation</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <Foundation name="social-github" size={30} color="#333" />
          <Text style={styles.iconText}>social-github</Text>
        </View>
        <View style={styles.iconItem}>
          <Foundation name="social-twitter" size={30} color="#1DA1F2" />
          <Text style={styles.iconText}>social-twitter</Text>
        </View>
        <View style={styles.iconItem}>
          <Foundation name="social-instagram" size={30} color="#E4405F" />
          <Text style={styles.iconText}>social-instagram</Text>
        </View>
        <View style={styles.iconItem}>
          <Foundation name="torso" size={30} color="blue" />
          <Text style={styles.iconText}>torso</Text>
        </View>
      </View>

      {/* 11. EVIL ICONS (Minimalista) */}
      <Text style={styles.sectionTitle}>11. Evil Icons</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconItem}>
          <EvilIcons name="sc-facebook" size={30} color="#1877F2" />
          <Text style={styles.iconText}>sc-facebook</Text>
        </View>
        <View style={styles.iconItem}>
          <EvilIcons name="sc-twitter" size={30} color="#1DA1F2" />
          <Text style={styles.iconText}>sc-twitter</Text>
        </View>
        <View style={styles.iconItem}>
          <EvilIcons name="sc-google-plus" size={30} color="#DB4437" />
          <Text style={styles.iconText}>sc-google-plus</Text>
        </View>
        <View style={styles.iconItem}>
          <EvilIcons name="cart" size={30} color="green" />
          <Text style={styles.iconText}>cart</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  sectionTitle: {
    fontSize: 18,
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
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '600',
    color: '#2c3e50',
  },
});