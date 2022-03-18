import React, {useEffect} from 'react';
import Providers from './navigation';

import {
  requestUserPermission,
  notificationListener,
} from './services/notification/notification_service';
import {
  createChannel,
  localPushNotifs,
} from './services/notification/local_push_notifs';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    createChannel();

    notificationListener();
  }, []);
  return <Providers />;
};

export default App;
