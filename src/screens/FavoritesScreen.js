import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function FavoritesScreen({ favorites }) {
  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>Belum ada destinasi favorit.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.favCard}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.sub}>{item.location}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  emptyText: { textAlign: 'center', marginTop: 40, color: '#999', fontSize: 16 },
  favCard: { padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#eee' },
  title: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  sub: { fontSize: 13, color: '#666', marginTop: 2 }
});