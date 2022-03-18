import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/AppScreens/HomeScreen';
import TestScreen from '../screens/AppScreens/TestScreen';
import ProgressCard from '../screens/AppScreens/ProgressCard';
import Resources from '../screens/AppScreens/Resources';
import Icon from 'react-native-vector-icons/AntDesign';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TestPortal from '../screens/AppScreens/TestPortal';

const BottomNavBar = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 15,
          right: 15,

          backgroundColor: '#fff',
          borderRadius: 18,
          height: 70,
          paddingBottom: 5,
          ...styles.shadow,
        },
      }}
      activeColor="#ffffff"
      barStyle={{backgroundColor: '#FF3B27'}}>
      <Tab.Screen
        name="Classes"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Join Classes',
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/images/join_class.png')}
                resizeMode="contain"
                style={{
                  height: 25.5,
                  width: 25.5,
                  tintColor: focused ? '#FF8C4A' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#FF8C4A' : '#748c94', fontSize: 12}}>
                Classes
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tests"
        component={TestPortal}
        options={{
          tabBarLabel: 'Join Classes',
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/images/test.png')}
                resizeMode="contain"
                style={{
                  height: 25.5,
                  width: 25.5,
                  tintColor: focused ? '#FF8C4A' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#FF8C4A' : '#748c94', fontSize: 12}}>
                Test
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Progress Card"
        component={ProgressCard}
        options={{
          tabBarLabel: 'Join Classes',
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/images/progress_card.png')}
                resizeMode="contain"
                style={{
                  height: 25.5,
                  width: 25.5,
                  tintColor: focused ? '#FF8C4A' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#FF8C4A' : '#748c94', fontSize: 12}}>
                Progress Card
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Resources"
        component={Resources}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/images/resources.png')}
                resizeMode="contain"
                style={{
                  height: 25.5,
                  width: 25.5,
                  tintColor: focused ? '#FF8C4A' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#FF8C4A' : '#748c94', fontSize: 12}}>
                Resources
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
