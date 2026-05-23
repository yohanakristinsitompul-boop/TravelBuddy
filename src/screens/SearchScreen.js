import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, ViewBase } from 'react-native';
import { destinationsData } from '../data/destinations';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredData = destinationsData.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cari destinasi impianmu..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.searchItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemLoc}>{item.location}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Destinasi tidak ditemukan.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#fafafa'
  },
  searchItem: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  itemLoc: { fontSize: 13, color: '#888' },
  emptyText: { textAlign: 'center', marginTop: 20, color: '#999' }
});