import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tts from 'react-native-tts';
import {localPushNotifs} from './local_push_notifs';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log(fcmToken, 'The old token');
  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log(fcmToken, 'the new generated token');
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    } catch (error) {
      console.log(error, 'error raised in fcmToken');
    }
  }
};

export const notificationListener = async () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    // navigation.navigate(remoteMessage.data.type);
  });

  messaging().onMessage(async remoteMessage => {
    Tts.speak(remoteMessage.notification.body);
    console.log('remote' + JSON.stringify(remoteMessage));
    console.log('recieved in foreground');
    await localPushNotifs(
      remoteMessage.notification.title,
      'Sample Subtitle',
      remoteMessage.notification.body,
      remoteMessage.data.imageUrl,
    );
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        //setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      }
      //setLoading(false);
    });
};
