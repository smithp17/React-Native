import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        navigation.navigate('SignIn');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
        alert('Error signing out. Please try again.');
      });
  };

  return (
    <ImageBackground source={require('../../assets/images/homeback.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to EventButterfly</Text>
        <Text style={styles.subtitle}>Manage your school events effortlessly</Text>
        <TouchableOpacity style={[styles.button, styles.detailsButton]} onPress={() => navigation.navigate('Details')}>
          <Text style={styles.buttonText}>View Event Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', // Adding a semi-transparent overlay
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  detailsButton: {
    backgroundColor: '#4CAF50',
  },
  logoutButton: {
    backgroundColor: '#FF6347',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
