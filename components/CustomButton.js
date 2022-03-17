import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

const CustomButton = ({bgcolor, text, onPress, ...rest}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} {...rest}>
        <View style={[styles.container, {backgroundColor: bgcolor}]}>
          <Text style={styles.textst}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '7%',
    paddingHorizontal: '10%',
    borderRadius: 12,
    paddingVertical: 9,
    marginVertical: 38,
    elevation: 2,
    height: 54,
  },
  textst: {
    color: '#ffffff',
    fontSize: 24,
    lineHeight: 36,
    fontFamily: 'Poppins-Regular.ttf',
    textAlign: 'center',
  },
});
