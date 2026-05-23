import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import SearchScreen from './src/screens/SearchScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Accent color sesuai instruksi dosen (#00b894)
const ACCENT_COLOR = '#00b894';

// 1. Stack Navigator khusus untuk Tab Home
function HomeStack({ favorites, toggleFavorite }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: ACCENT_COLOR },
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ title: 'Destinations' }} 
      />
      <Stack.Screen name="DetailScreen" options={{ title: 'Detail Tujuan' }}>
        {(props) => <DetailScreen {...props} favorites={favorites} toggleFavorite={toggleFavorite} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

// 2. Main Application dengan Bottom Tabs
export default function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (item) => {
    if (favorites.some(fav => fav.id === item.id)) {
      setFavorites(favorites.filter(fav => fav.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'Search') iconName = focused ? 'search' : 'search-outline';
            else if (route.name === 'Favorites') iconName = focused ? 'heart' : 'heart-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: ACCENT_COLOR,
          tabBarInactiveTintColor: 'gray',
          headerShown: route.name !== 'Home', // Sembunyikan header tab Home karena sudah pakai header Stack
          headerStyle: { backgroundColor: ACCENT_COLOR },
          headerTintColor: '#fff',
        })}
      >
        <Tab.Screen name="Home">
          {() => <HomeStack favorites={favorites} toggleFavorite={toggleFavorite} />}
        </Tab.Screen>
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Favorites" options={{ tabBarBadge: favorites.length > 0 ? favorites.length : null }}>
          {() => <FavoritesScreen favorites={favorites} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}