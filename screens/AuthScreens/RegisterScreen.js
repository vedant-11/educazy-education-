import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../components/authScreens/logo';
import CustomButton from '../../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import TransparenButton from '../../components/TransparenButton';
import {styles} from './styles';
import {PostRequest} from '../../services/axios_service/axios_service';
import SelectDropdown from 'react-native-select-dropdown';
import axios from 'axios';

const register = async (
  username,
  password,
  name,
  classname,
  school,
  disability,
) => {
  console.log(username, password, name, classname, school, disability);
  var url = 'https://educazy.herokuapp.com/api/user/register';

  const fcmToken = await messaging().getToken();

  var res = await axios.post(url, {
    username: username,
    password: password,
    name: name,
    class: classname,
    school: school,
    disabilities: [disability],
  });
  console.log(res.data);
};

const RegisterScreen = ({route, navigation}) => {
  const {name, school, userName} = route.params;
  const [open, setOpen] = useState(false);
  const [classname, setClassname] = useState(null);
  const [password, setpassword] = useState(null);
  const [confirmPass, setconfirmPass] = useState(null);
  const [value, setValue] = useState(null);
  const [inputEnabled, setInputEnabled] = useState(true);
  const [disability, setdisability] = useState(null);
  const [items, setItems] = useState(['Blind', 'Deaf', 'Mute']);

  useEffect(() => {
    console.log(name, school, userName);
  });

  useEffect(() => {
    if (open) {
      setInputEnabled(false);
    } else {
      setInputEnabled(true);
    }
  }, [open]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <LinearGradient
          colors={['#FF3B27', '#FF8C4A']}
          style={styles.linearGradient}>
          <View style={styles.container}>
            <Logo />

            <Text style={styles.mainText}>Enter your Details</Text>
            <View style={{marginHorizontal: 45, marginVertical: 20}}>
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt{' '}
              </Text>
            </View>

            <View style={[styles.input, {marginVertical: 20}]}>
              <SelectDropdown
                buttonStyle={{
                  width: '100%',
                  alignSelf: 'center',
                  height: '100%',
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  borderColor: '#E5E5E5',
                  borderWidth: 1,
                  elevation: 4,
                  marginTop: 0,
                }}
                data={items}
                onSelect={(selectedItem, index) => {
                  setdisability(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>

            <View style={styles.input}>
              <TextInput
                editable={inputEnabled}
                style={{color: '#8D8D8D', textAlign: 'center'}}
                value={classname}
                onChangeText={text => setClassname(text)}
                placeholder="Enter your class"
              />
            </View>
            <View style={[styles.input, {marginVertical: 15}]}>
              <TextInput
                editable={inputEnabled}
                style={{color: '#8D8D8D', textAlign: 'center'}}
                value={password}
                onChangeText={text => setpassword(text)}
                placeholder="Enter your password"
              />
            </View>
            <View style={[styles.input, {marginVertical: 15}]}>
              <TextInput
                editable={inputEnabled}
                style={{color: '#8D8D8D', textAlign: 'center'}}
                value={confirmPass}
                onChangeText={text => setconfirmPass(text)}
                placeholder="Confirm password"
              />
            </View>
            <CustomButton
              text="Enroll Now"
              bgcolor="#62C733"
              onPress={async () => {
                await register(
                  userName,
                  password,
                  name,
                  classname,
                  school,
                  disability,
                );
              }}
            />

            <TransparenButton
              text="Back"
              bgcolor="transparent"
              onPress={() => {
                console.log('hi');
              }}
            />

            <Text style={styles.enrollText}>Didn’t enroll yet?</Text>
            <Text style={styles.enrollText}>Click here to enroll now</Text>
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
