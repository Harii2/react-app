const firebaseConfig = {
  apiKey: "AIzaSyClJ38xm-UY8mvgt0DBVkUPs3UmP5WaZeI",
  authDomain: "whatsapp-clone-ffab8.firebaseapp.com",
  projectId: "whatsapp-clone-ffab8",
  storageBucket: "whatsapp-clone-ffab8.appspot.com",
  messagingSenderId: "167816836370",
  appId: "1:167816836370:web:7de4158d079b80fea02fcb",
  measurementId: "G-618BGBNPXX"
}; 

// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




