import React from 'react';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import {LoginScreen, SignUpScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
