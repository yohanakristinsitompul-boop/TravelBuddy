import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailScreen({ route, favorites, toggleFavorite }) {
  const { destination } = route.params;
  const isFav = favorites.some(fav => fav.id === destination.id);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: destination.image }} style={styles.heroImage} />
      
      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{destination.name}</Text>
            <Text style={styles.location}>{destination.location}</Text>
          </View>
          <TouchableOpacity onPress={() => toggleFavorite(destination)} style={styles.favButton}>
            <Ionicons name={isFav ? "heart" : "heart-outline"} size={28} color={isFav ? "#e74c3c" : "#666"} />
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Harga Tiket / Estimasi</Text>
        <Text style={styles.price}>{destination.price}</Text>

        <Text style={styles.sectionTitle}>Deskripsi</Text>
        <Text style={styles.description}>{destination.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  heroImage: { width: '100%', height: 250 },
  contentContainer: { padding: 20 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  name: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  location: { fontSize: 16, color: '#666', marginTop: 4 },
  favButton: { padding: 8, backgroundColor: '#f9f9f9', borderRadius: 50 },
  divider: { height: 1, backgroundColor: '#eee', marginVertical: 15 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#00b894', marginTop: 10 },
  price: { fontSize: 18, fontWeight: 'bold', color: '#2ecc71', marginTop: 4 },
  description: { fontSize: 15, color: '#555', marginTop: 6, lineHeight: 22, textAlign: 'justify' },
});