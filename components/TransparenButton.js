import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const TransparenButton = ({bgcolor, text, onPress}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={[styles.container, {backgroundColor: bgcolor}]}>
          <Text style={styles.textst}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TransparenButton;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '7%',
    paddingHorizontal: '30%',
    borderRadius: 12,
    paddingVertical: 9,
    marginVertical: 10,

    borderColor: '#fff',
    borderWidth: 1.5,
    height: 54,
  },
  textst: {
    color: '#ffffff',
    fontSize: 24,
    lineHeight: 36,
    fontFamily: 'Poppins-Regular.ttf',
  },
});
