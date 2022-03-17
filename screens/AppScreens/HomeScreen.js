import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import BottomNavBar from '../../components/BottomNavBar';
import CustomButton from '../../components/CustomButton';
import Events from './Events';
import {NativeEventEmitter, NativeModules} from 'react-native';
const {AlanManager, AlanEventEmitter} = NativeModules;

const HomeScreen = ({navigation}) => {
  console.log('navigation: ', navigation);

  var subscription = new NativeEventEmitter(AlanEventEmitter).addListener(
    'onCommand',
    data => {
      navigation.navigate('Quiz');
      console.log(`onCommand: ${JSON.stringify(data)}`);
    },
  );
  useEffect(() => {
    subscription.apply();

    return () => subscription.remove();
  }, []);
  const [classCode, setclassCode] = useState('');
  return (
    <ScrollView>
      <View>
        <View style={{top: 10, left: 15, position: 'absolute'}}>
          <Image source={require('../../assets/images/logo_red.png')} />
        </View>

        <View style={{marginTop: 80, alignItems: 'center'}}>
          <Image source={require('../../assets/images/home_image.png')} />
        </View>

        <View>
          <Text
            style={{
              color: '#000000',
              fontWeight: '500',
              fontSize: 32,
              lineHeight: 48,
              textAlign: 'center',
            }}>
            Join the class
          </Text>
        </View>

        <View style={{marginHorizontal: '20%', marginVertical: 12}}>
          <Text
            style={{
              color: '#AEAEAE',
              fontSize: 16,
              lineHeight: 24,
              fontWeight: '500',
              textAlign: 'center',
            }}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            marginVertical: 20,
            elevation: 2.5,
            marginHorizontal: 30,
          }}>
          <TextInput
            placeholder="Excyyz-99990"
            value={classCode}
            onChangeText={text => setclassCode(text)}
          />
        </View>

        <View>
          <CustomButton
            bgcolor="#62C733"
            text="Enter Class"
            onPress={() => {}}
          />
        </View>

        <View>
          <Text
            style={{
              color: '#000000',
              fontWeight: '500',
              fontSize: 32,
              lineHeight: 48,
              textAlign: 'center',
            }}>
            Events
          </Text>
        </View>

        <View>
          {/* <FlatList
        showsHorizontalScrollIndicator={false}

         /> */}
          <Events />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
