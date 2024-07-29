import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Details</Text>
      <Text style={styles.content}>Details about the event will be displayed here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default DetailsScreen;
