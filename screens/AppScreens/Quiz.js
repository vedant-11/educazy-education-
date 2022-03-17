import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  CountdownCircleTimer,
  useCountdown,
} from 'react-native-countdown-circle-timer';
import data from '../../data/QuizData';

const formatTime = ({remainingTime}) => {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  return `${hours}:${minutes}:${seconds}`;
};

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [quizData, setquizData] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, settimeLeft] = useState('');
  const [barWidth, setBarWidth] = useState(0);

  const QuestionBar = () => {
    var bars = [];
    for (let i = 0; i < data.length; i++) {
      var backgroundColor: bgColor;
      var bgColor = currentQuestionIndex >= i ? '#FF8C4A' : '#f6c87b';
      bars.push(
        <View
          style={{
            backgroundColor: bgColor,
            width: barWidth,
            marginHorizontal: 10,
            height: 10,
          }}>
          {
            <View
              style={{
                width: barWidth,
                marginHorizontal: 10,
                height: 10,
              }}></View>
          }
        </View>,
      );
    }
    return bars;
  };

  const {
    path,
    pathLength,
    stroke,
    strokeDashoffset,
    remainingTime,
    elapsedTime,
    size,
    strokeWidth,
  } = useCountdown({isPlaying: true, duration: 900, colors: '#abc'});
  var newArr = [];

  useEffect(() => {
    data.map((item, index) => {
      const newItem = {
        ...item,
        selected_option: -1,
      };
      newArr.push(newItem);
      let windowwidth = Dimensions.get('window').width;
      const width = windowwidth / data.length;
      setBarWidth(width - 5 * data.length);
      return newItem;
    });

    console.log(newArr);
  }, [data]);

  const prevHandler = () => {
    if (currentQuestionIndex != 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const nextHandler = () => {
    if (currentQuestionIndex != data.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const evaluateScore = () => {
    data.map((item, index) => {
      if (item.selected_option == item.selected_option) {
        setScore(score + 1);
      }
    });
  };

  const submitHandler = () => {
    evaluateScore();
  };
  useEffect(() => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    settimeLeft(`${hours}:${minutes}:${seconds}`);
  }, [remainingTime]);
  return (
    <View style={styles.container}>
      <View style={{top: 10, left: 15, position: 'absolute'}}>
        <Image source={require('../../assets/images/logo_red.png')} />
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#FF8C4A',
            height: 130,
            width: '94%',
            marginTop: 60,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 18,
          }}>
          <View>
            <Text>Time Remaining</Text>
          </View>
          <CountdownCircleTimer
            size={100}
            isPlaying
            duration={900}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[1800, 1000, 400, 0]}>
            {({remainingTime}) => (
              <Text style={{color: 'black'}}>{timeLeft}</Text>
            )}
          </CountdownCircleTimer>
        </View>
      </View>

      <View style={{left: 15, marginRight: 320}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}}>
          {currentQuestionIndex + 1}/{data.length}
        </Text>
      </View>

      <View
        style={{
          alignItems: 'flex-start',
          marginHorizontal: 12,
          marginVertical: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 24,
            fontWeight: '800',
            color: 'black',
          }}>
          {data[currentQuestionIndex].question}
        </Text>
      </View>

      {data[currentQuestionIndex].options.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            data[currentQuestionIndex].selected_option = index;
          }}>
          <View
            style={[
              styles.option,
              {
                backgroundColor:
                  data[currentQuestionIndex].selected_option == index
                    ? '#FFD580'
                    : '#F3F3F3',
              },
            ]}>
            <Text style={styles.optionText}>{item}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginVertical: 25,
          marginHorizontal: 8,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            prevHandler();
          }}>
          <View style={{flexDirection: 'row', elevation: 5}}>
            <MaterialIcons name="navigate-before" color="#7F5EEC" size={25} />
            <Text style={{color: '#7F5EEC', fontSize: 20, fontWeight: '500'}}>
              Previous
            </Text>
          </View>
        </TouchableOpacity>
        {currentQuestionIndex == data.length - 1 ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              submitHandler();
            }}>
            <View style={{flexDirection: 'row', elevation: 5}}>
              <Text style={{color: '#7F5EEC', fontSize: 20, fontWeight: '500'}}>
                Submit
              </Text>
              <MaterialIcons name="done" color="#7F5EEC" size={25} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              nextHandler();
            }}>
            <View style={{flexDirection: 'row', elevation: 5}}>
              <Text style={{color: '#7F5EEC', fontSize: 20, fontWeight: '500'}}>
                Next
              </Text>
              <MaterialIcons name="navigate-next" color="#7F5EEC" size={25} />
            </View>
          </TouchableOpacity>
        )}
      </View>

      <View style={{bottom: 10, position: 'absolute', flexDirection: 'row'}}>
        <QuestionBar />
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    minWidth: '90%',
    elevation: 3,
    borderRadius: 15,
    marginVertical: 15,
    marginHorizontal: 8,
  },
  optionText: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
});
