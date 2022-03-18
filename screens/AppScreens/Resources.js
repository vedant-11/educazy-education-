import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';

const Resources = () => {
  const Books = [
    {key: 1, text: 'Maths', image: require('../../assets/images/maths.jpeg')},
    {
      key: 2,
      text: 'Science',
      image: require('../../assets/images/science.jpeg'),
    },
    {
      key: 3,
      text: 'Chemistry',
      image: require('../../assets/images/chem.jpeg'),
    },
    {
      key: 4,
      text: 'English',
      image: require('../../assets/images/english.jpeg'),
    },
  ];

  const BookView = ({text, path}) => (
    <View style={{alignItems: 'center', margin: 20}}>
      <View style={{backgroundColor: '#DEDEDE', padding: 10}}>
        <Image source={path} style={{height: 123, width: 108}} />
      </View>
      <Text style={styles.bookText}>{text}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Image source={require('./assets/logo_educazy.png')} h />
      <Text style={styles.titleText}>Resources</Text>
      <Text style={styles.taglineText}>
        Never stop learning! Books, worksheets and reading materials now just
        one click away.
      </Text>

      <FlatList
        marginBottom={60}
        data={Books}
        renderItem={({item}) => <BookView text={item.text} path={item.image} />}
        numColumns={2}
      />

      <Text style={styles.titleText}>Braille Converter</Text>
      <Text style={styles.taglineText}>Easily convert braille to text.</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter text"
        placeholderTextColor="#8D8D8D"
      />
      <TouchableOpacity style={styles.button}>
        {/* <View style={styles.button}> */}
        <Text style={{color: 'white'}}>Convert</Text>
        {/* </View> */}
      </TouchableOpacity>
      <View style={styles.output} />

      <View style={{height: 100}} />
    </ScrollView>
  );
};

export default Resources;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  titleText: {
    color: '#3D3D3D',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  taglineText: {
    color: '#5E5D5D',
    fontSize: 16,
    fontWeight: '500',
  },
  bookText: {
    marginTop: 15,
    color: '#525252',
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    elevation: 3,
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 20,
  },
  output: {
    elevation: 3,
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginBottom: 20,
    height: 175,
  },
  button: {
    elevation: 3,
    backgroundColor: '#62C733',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
  },
});
