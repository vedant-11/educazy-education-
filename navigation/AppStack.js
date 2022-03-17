import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/AppScreens/HomeScreen';
import BottomNavBar from '../components/BottomNavBar';
import Quiz from '../screens/AppScreens/Quiz';
import TestPortal from '../screens/AppScreens/TestPortal';
import {Router, Scene, ActionConst} from 'react-native-router-flux';
import CallScreen1 from '../screens/AppScreens/CallScreen1';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="TestPortal">
      <Stack.Screen
        name="Home"
        component={BottomNavBar}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="TestPortal"
        component={TestPortal}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="CallScreen"
        component={CallScreen1}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
