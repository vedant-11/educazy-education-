import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const logo = () => {
  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 42,
        }}>
        <Image source={require('../../assets/images/logo.png')} />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
        }}>
        <Image source={require('../../assets/images/title.png')} />
      </View>
    </View>
  );
};

export default logo;

const styles = StyleSheet.create({});
