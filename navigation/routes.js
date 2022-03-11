import React, {useContext, useState, useEffect} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthState} from '../stores/AuthState';
import UserModel from '../models/UserModel';
import {observer} from 'mobx-react';
import {NavigationContainer} from '@react-navigation/native';

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

    {
      isLogin == true
        ? AuthState.login(new UserModel(name, email, jwt))
        : AuthState.logout;
    }
  }, []);

  return (
    <NavigationContainer>
      {AuthState.isLogin == true ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default observer(Routes);
