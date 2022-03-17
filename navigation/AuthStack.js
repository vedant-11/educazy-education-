import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import RegisterScreen from '../screens/AuthScreens/RegisterScreen';
import EnrollScreen from '../screens/AuthScreens/EnrollScreen-I';
import CallScreen from '../screens/AppScreens/CallScreen';
import BottomNavBar from '../components/BottomNavBar';
const Stack = createNativeStackNavigator();

const AuthStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Call">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Enroll"
        component={EnrollScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={RegisterScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Home"
        component={BottomNavBar}
        options={{header: () => null}}
      />

      <Stack.Screen
        name="Call"
        component={CallScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
