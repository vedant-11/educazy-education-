import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/AppScreens/HomeScreen';
import BottomNavBar from '../components/BottomNavBar';
import Quiz from '../screens/AppScreens/Quiz';
import TestPortal from '../screens/AppScreens/TestPortal';
import {Router, Scene, ActionConst} from 'react-native-router-flux';
import CallScreen1 from '../screens/AppScreens/CallScreen1';
import {createAppContainer} from 'react-navigation';
import {NativeModules, NativeEventEmitter} from 'react-native';
import {createNavigationContainerRef} from '@react-navigation/native';
import HandPose from '../screens/AppScreens/HandPoseScreen';

const navigationRef = createNavigationContainerRef();
const {AlanManager, AlanEventEmitter} = NativeModules;
const alanEventEmitter = new NativeEventEmitter(AlanEventEmitter);
import * as RootNavigation from './RootNavigation.js';

const Stack = createNativeStackNavigator();
const subscription = alanEventEmitter.addListener('command', data => {
  console.log(`got command event ${JSON.stringify(data)}`);
  // {"command":"showAlert","text":"text"}
  RootNavigation.navigate('Quiz');
});
const AppStack = () => {
  React.useEffect(() => {
    return () => subscription.remove();
  }, []);

  return (
    <Stack.Navigator>
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
