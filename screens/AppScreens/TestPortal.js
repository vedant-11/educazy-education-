import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TestPortal = () => {
  const RenderItem = ({item}) => {
    return (
      <View style={{marginHorizontal: 15}}>
        <View
          style={{
            marginTop: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}></View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.activeTest}>
            <Text style={styles.testName}>{item.testName}</Text>
            <Text style={styles.topic}>{item.topic}</Text>
            <Text style={styles.profName}>Professor: {item.professorName}</Text>
            <Text style={[styles.profName, {marginTop: 11}]}>
              Max Marks: {item.maxMarks}
            </Text>

            <View
              style={{
                justifyContent: 'space-between',
                marginTop: 42,
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}>
              <View style={{marginRight: '35%'}}>
                <AntDesign name="clockcircleo" size={25} color="#000" />
                <Text>{item.time}</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <AntDesign name="calendar" size={25} color="#000" />
                <View style={{alignItems: 'center'}}>
                  <Text>{item.date}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  var test = {
    testName: 'Test Name',
    topic: 'Ray Optics',
    professorName: 'Mr. XYZ',
    maxMarks: 100,
    time: '9:30',
    date: '19/3/2022',
  };

  var Instructions = [
    {
      instruction: 'The paper contains 10 questions.',
    },
    {
      instruction: 'The paper will  close after 30 minutes.',
    },
    {
      instruction: 'Have a stable network connection.',
    },
    {
      instruction: 'Take the test in a closed room.',
    },
  ];

  const [activeTest, setActiveTest] = useState(test);
  const [incomingTestList, setIncomingTestList] = useState([
    test,
    test,
    test,
    test,
  ]);

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View style={{top: 10, left: 15, position: 'absolute'}}>
          <Image source={require('../../assets/images/logo_red.png')} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 72,
            alignItems: 'baseline',
            marginHorizontal: 15,
          }}>
          <Text style={styles.heading}>Test Portal</Text>
          <Text style={styles.viewResult}>Test Portal</Text>
        </View>
        <RenderItem item={activeTest} />
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#62C733',
                marginHorizontal: 9,
                marginVertical: 62,
                width: 200,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 22,
                  lineHeight: 33,
                  fontWeight: '500',
                }}>
                Give Test
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{marginLeft: 15}}>
          <Text
            style={{
              color: 'black',
              fontSize: 22,
              lineHeight: 33,
              fontWeight: '500',
            }}>
            Instructions
          </Text>
        </View>
        {/* <FlatList data={Instructions} renderItem={item} /> */}
        <FlatList
          horizontal
          data={incomingTestList}
          // keyExtractor={item => Math.random().toString}
          renderItem={RenderItem}
        />
      </View>
    </ScrollView>
  );
};

export default TestPortal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  heading: {
    fontSize: 30,
    lineHeight: 45,
    fontWeight: '500',
    color: '#000000',
  },
  viewResult: {
    color: '#2D66D6',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
  activeTest: {
    marginTop: 11,
    height: 265,
    width: 230,
    backgroundColor: '#F3F3F3',
    borderRadius: 8,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  testName: {
    color: '#2D66D6',
    fontSize: 18,
    lineHeight: 27,
  },
  topic: {
    marginTop: 12,
    color: '#8F8F8F',
    fontSize: 15,
    lineHeight: 22,
  },
  profName: {
    marginTop: 20,
    color: '#000000',
    fontSize: 14,
    lineHeight: 21,
  },
});
