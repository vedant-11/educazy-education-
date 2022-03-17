import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../components/authScreens/logo';
import CustomButton from '../../components/CustomButton';
import {styles} from './styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthState} from '../../stores/AuthState';
import UserModel from '../../models/UserModel';

const login = async (username, password, navigation) => {
  var url = 'https://educazy.herokuapp.com/api/user/login';
  var res = await axios.post(url, {
    username: username,
    password: password,
  });
  if (res.data.success == true) {
    await AsyncStorage.setItem('@jwt', res.data.key);
    //var user:UserModel= UserModel(username:username,email:"",jwtToken:(res.data.key))
    navigation.navigate('Home');
  }
  console.log(res.data);
};
const LoginScreen = ({navigation}) => {
  const [userId, setuserId] = useState('');
  const [pass, setpass] = useState('');
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF3B27', '#FF8C4A']}
        style={styles.linearGradient}>
        <View style={styles.container}>
          <Logo />

          <Text style={styles.mainText}>Welcome Back</Text>
          <View style={{marginHorizontal: 45, marginVertical: 20}}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt{' '}
            </Text>
          </View>

          <View style={styles.input}>
            <TextInput
              style={{color: '#8D8D8D', textAlign: 'center'}}
              value={userId}
              onChangeText={text => setuserId(text)}
              placeholder="Please Enter Unique User ID"
            />
          </View>
          <View style={[styles.input, {marginVertical: 15}]}>
            <TextInput
              style={{color: '#8D8D8D', textAlign: 'center'}}
              value={pass}
              onChangeText={text => setpass(text)}
              placeholder="Please Enter Password"
            />
          </View>
          <CustomButton
            text="Sign In"
            bgcolor="#62C733"
            onPress={async () => {
              await login(userId, pass, navigation);
            }}
          />

          <Text style={styles.enrollText}>Didn’t enroll yet?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Enroll');
            }}>
            <Text style={styles.enrollText}>Click here to enroll now</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LoginScreen;
