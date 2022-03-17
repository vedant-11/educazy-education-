import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../components/authScreens/logo';
import CustomButton from '../../components/CustomButton';
import {styles} from './styles';

const EnrollScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [school, setSchool] = useState('');
  const [userName, setuserName] = useState('');
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
              value={fullName}
              onChangeText={text => setFullName(text)}
              placeholder="Please enter your full name"
            />
          </View>
          <View style={[styles.input, {marginVertical: 15}]}>
            <TextInput
              style={{color: '#8D8D8D', textAlign: 'center'}}
              value={userName}
              onChangeText={text => setuserName(text)}
              placeholder="Select your username"
            />
          </View>
          <View style={[styles.input, {marginVertical: 15}]}>
            <TextInput
              style={{color: '#8D8D8D', textAlign: 'center'}}
              value={school}
              onChangeText={text => setSchool(text)}
              placeholder="Select your school"
            />
          </View>
          <CustomButton
            text="Next"
            bgcolor="#2D66D6"
            onPress={() => {
              console.log('username: ' + userName);
              navigation.navigate('Signup', {
                name: fullName,
                school: school,
                userName: userName,
              });
            }}
          />

          <Text style={styles.enrollText}>Didn’t enroll yet?</Text>
          <Text style={styles.enrollText}>Click here to enroll now</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default EnrollScreen;
