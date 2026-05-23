import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { destinationsData } from '../data/destinations';

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('DetailScreen', { destination: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={destinationsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  listContainer: { padding: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: { width: '100%', height: 180 },
  infoContainer: { padding: 12 },
  name: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  location: { fontSize: 14, color: '#666', marginTop: 4 },
});