import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF3B27', '#FF8C4A']}
        style={styles.linearGradient}>
        <Text>LoginScreen</Text>
      </LinearGradient>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: 30,
  },
});
