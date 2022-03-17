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
const {AlanManager, AlanEventEmitter} = NativeModules;
const Routes = () => {
  const [isLogin, setisLogin] = useState(false);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [jwt, setjwt] = useState('');
  const navigationRef = createNavigationContainerRef();
  useEffect(() => {
    const alanEventEmitter = new NativeEventEmitter(AlanEventEmitter);

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
    alanEventEmitter.addListener('onCommand', data => {
      if (navigationRef.isReady()) {
        navigationRef.navigate('Quiz');
      }
      console.log(`onCommand: ${JSON.stringify(data)}`);
    });
    return () => alanEventEmitter.removeAllListeners();
  }, []);

  {
    isLogin == true ? AuthState.login(name, jwt) : AuthState.logout;
  }

  return (
    <NavigationContainer>
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
