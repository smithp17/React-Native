import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './app/screens/SignInScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import HomeScreen from './app/screens/HomeScreen';
import DetailsScreen from './app/screens/DetailsScreen'; // Ensure this exists
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDe_V4Ly3NfW69sPLfn18apAmFkgsCrVk8",
  authDomain: "eventbutterfly-9c9ec.firebaseapp.com",
  projectId: "eventbutterfly-9c9ec",
  storageBucket: "eventbutterfly-9c9ec.appspot.com",
  messagingSenderId: "475808790742",
  appId: "1:475808790742:web:940f62580b7bc91b0c3177",
  measurementId: "G-GZD9VS7CBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
