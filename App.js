import React, {useEffect} from 'react';
import Providers from './navigation';

import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals,
} from 'react-native-webrtc';

import {
  requestUserPermission,
  notificationListener,
} from './services/notification/notification_service';
import {
  createChannel,
  localPushNotifs,
} from './services/notification/local_push_notifs';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    createChannel();
    localPushNotifs('hi', 'hi', 'kii');
    notificationListener();
  }, []);
  return <Providers />;
};

export default App;
