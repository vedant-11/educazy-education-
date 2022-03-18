import React, {useContext, useState, useEffect} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthState} from '../stores/AuthState';
import UserModel from '../models/UserModel';
import {observer} from 'mobx-react';
import {NavigationContainer} from '@react-navigation/native';
import {AlanView} from '@alan-ai/alan-sdk-react-native';
import {NativeEventEmitter, NativeModules} from 'react-native';
import {createNavigationContainerRef} from '@react-navigation/native';
const navigationRef = createNavigationContainerRef();
const {AlanManager, AlanEventEmitter} = NativeModules;
const alanEventEmitter = new NativeEventEmitter(AlanEventEmitter);

import * as RootNavigation from './RootNavigation.js';
function navigate(name) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name);
  } else {
    navigate(name);
  }
}

function goBack() {
  if (navigationRef.canGoBack()) {
    navigationRef.goBack();
  } else {
    console.log('cant go back');
  }
}
const subscription = alanEventEmitter.addListener('command', data => {
  console.log(`got command event ${JSON.stringify(data)}`);
  // {"command":"showAlert","text":"text"}
  if (data.route == 'test') {
    navigationRef.navigate('TestPortal');
  }
  if (data.route == 'homepage') {
    navigationRef.navigate('Home');
  }
  if (data.route == 'quiz') {
    navigationRef.navigate('Quiz');
  }
  if (data.route == 'class') {
    navigationRef.navigate('CallScreen');
  }
  if (data.route == 'res') {
    navigationRef.navigate('Resources');
  }
  if (data.route == 'back') {
    goBack();
  }
});

const Routes = () => {
  const [isLogin, setisLogin] = useState(false);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [jwt, setjwt] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('@isLogin').then(value => {
      setisLogin(value);
    });
    AsyncStorage.getItem('@name').then(value => {
      setname(value);
    });
    AsyncStorage.getItem('@email').then(value => {
      setemail(value);
    });
    AsyncStorage.getItem('@jwt').then(value => {
      setjwt(value);
    });

    return () => subscription.remove();
  }, []);

  {
    isLogin == true ? AuthState.login(name, jwt) : AuthState.logout;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <AlanView
        projectid={
          '114f2bd0350d71189209e8fa2b0ca1d92e956eca572e1d8b807a3e2338fdd0dc/stage'
        }
      />
      {/* {isLogin == true ? <AppStack /> : <AuthStack />} */}
      <AppStack />
    </NavigationContainer>
  );
};

export default observer(Routes);
