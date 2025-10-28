import { Tabs } from 'expo-router';
import React from 'react';
import { FontAwesome5, MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="catalogo"
        options={{
          title: 'Catálogo',
          tabBarIcon: ({ color }) => <MaterialIcons name="grid-view" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="carrinho"
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ color }) => <FontAwesome5 name="shopping-cart" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="produtos"
        options={{
          title: 'Produtos',
          tabBarIcon: ({ color }) => <FontAwesome5 name="boxes" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Relatórios',
          tabBarIcon: ({ color }) => <MaterialIcons name="analytics" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="teste-icones"
        options={{
          title: 'Testar Ícones',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="shape" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}