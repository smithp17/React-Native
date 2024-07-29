import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Animated, Easing, ScrollView, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const colorAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(colorAnimation, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: false,
          }),
          Animated.timing(colorAnimation, {
            toValue: 0,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: false,
          }),
        ]),
      ).start();
    };
    startAnimation();
  }, [colorAnimation]);

  const backgroundColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFB6C1', '#ADD8E6'],
  });

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed up:', user);
        navigation.navigate('Home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing up:', errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animated.View style={[styles.animationContainer, { backgroundColor }]}>
          <View style={styles.content}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#888"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <LinearGradient
                colors={['#FF7F50', '#FF6347']}
                style={styles.buttonBackground}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.googleButton]}>
              <Image source={require('../../assets/images/google.png')} style={styles.icon} />
              <Text style={styles.buttonText}>Sign Up with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.facebookButton]}>
              <Image source={require('../../assets/images/facebook.png')} style={styles.icon} />
              <Text style={styles.buttonText}>Sign Up with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.link}>Already have an account? Sign In</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    margin: 16,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 16,
    width: '100%',
  },
  buttonBackground: {
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  googleButton: {
    backgroundColor: '#db4437',
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  link: {
    color: '#6200ee',
    marginTop: 16,
  },
});

export default SignUpScreen;
