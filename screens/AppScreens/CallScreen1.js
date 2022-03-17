import {Dimensions, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  NativeModules,
} from 'react-native';
// Import the RtcEngine class and view rendering components into your project.
import RtcEngine, {
  RtcLocalView,
  RtcRemoteView,
  VideoRenderMode,
} from 'react-native-agora';
import {Actions} from 'react-native-router-flux';
const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const requestCameraAndAudioPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    ]);
    if (
      granted['android.permission.RECORD_AUDIO'] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      granted['android.permission.CAMERA'] ===
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log('You can use the cameras & mic');
    } else {
      console.log('Permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
// Define a Props interface.
interface Props {}

// Define a State interface.
interface State {
  appId: string;
  channelName: string;
  token: string;
  joinSucceed: boolean;
  peerIds: number[];
}

// Create an App component, which extends the properties of the Pros and State interfaces.
export default class CallScreen1 extends Component<Props, State> {
  _engine: RtcEngine;
  // Add a constructor，and initialize this.state. You need:
  // Replace yourAppId with the App ID of your Agora project.
  // Replace yourChannel with the channel name that you want to join.
  // Replace yourToken with the token that you generated using the App ID and channel name above.
  constructor(props) {
    super(props);
    this.state = {
      appId: 'f9f5237847ae49a29bf1c26af1b71ae2',
      channelName: 'classroom',
      token:
        '006f9f5237847ae49a29bf1c26af1b71ae2IAC9jIYUsNbnc1awjpusReXO6/8KAjeTD2efIXQ7B3Omz50wfUkAAAAAEADjTvSOnU0zYgEAAQCcTTNi',
      joinSucceed: false,
      peerIds: [],
      vidMute: false,
      audMute: false,
    };
    if (Platform.OS === 'android') {
      requestCameraAndAudioPermission().then(() => {
        console.log('requested!');
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.formLabel}></Text>
      </View>
    );
  }
  // Mount the App component into the DOM.
  componentDidMount() {
    this.init();
  }
  // Pass in your App ID through this.state, create and initialize an RtcEngine object.
  init = async () => {
    const {appId} = this.state;
    this._engine = await RtcEngine.create(appId);
    // Enable the video module.
    await this._engine.enableVideo();

    // Listen for the UserJoined callback.
    // This callback occurs when the remote user successfully joins the channel.
    this._engine.addListener('UserJoined', (uid, elapsed) => {
      console.log('UserJoined', uid, elapsed);
      const {peerIds} = this.state;
      if (peerIds.indexOf(uid) === -1) {
        this.setState({
          peerIds: [...peerIds, uid],
        });
      }
    });

    // Listen for the UserOffline callback.
    // This callback occurs when the remote user leaves the channel or drops offline.
    this._engine.addListener('UserOffline', (uid, reason) => {
      console.log('UserOffline', uid, reason);
      const {peerIds} = this.state;
      this.setState({
        // Remove peer ID from state array
        peerIds: peerIds.filter(id => id !== uid),
      });
    });

    // Listen for the JoinChannelSuccess callback.
    // This callback occurs when the local user successfully joins the channel.
    this._engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
      console.log('JoinChannelSuccess', channel, uid, elapsed);
      this.setState({
        joinSucceed: true,
      });
    });
  };

  // Pass in your token and channel name through this.state.token and this.state.channelName.
  // Set the ID of the local user, which is an integer and should be unique. If you set uid as 0,
  // the SDK assigns a user ID for the local user and returns it in the JoinChannelSuccess callback.
  startCall = async () => {
    await this._engine.joinChannel(
      this.state.token,
      this.state.channelName,
      null,
      0,
    );
  };

  render() {
    return (
      <View style={styles.max}>
        <View style={styles.max}>
          <View style={styles.buttonHolder}>
            <TouchableOpacity onPress={this.startCall} style={styles.button}>
              <Text style={styles.buttonText}> Start Call </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.endCall} style={styles.button}>
              <Text style={styles.buttonText}> End Call </Text>
            </TouchableOpacity>
          </View>
          {this._renderVideos()}
        </View>
      </View>
    );
  }

  // Set the rendering mode of the video view as Hidden,
  // which uniformly scales the video until it fills the visible boundaries.
  _renderVideos = () => {
    const {joinSucceed} = this.state;
    return joinSucceed ? (
      <View style={styles.fullView}>
        <RtcLocalView.SurfaceView
          style={styles.max}
          channelId={this.state.channelName}
          renderMode={VideoRenderMode.Hidden}
        />
        {this._renderRemoteVideos()}
      </View>
    ) : null;
  };

  // Set the rendering mode of the video view as Hidden,
  // which uniformly scales the video until it fills the visible boundaries.
  _renderRemoteVideos = () => {
    const {peerIds} = this.state;
    return (
      <ScrollView
        style={styles.remoteContainer}
        contentContainerStyle={{paddingHorizontal: 2.5}}
        horizontal={true}>
        {peerIds.map((value, index, array) => {
          return (
            <RtcRemoteView.SurfaceView
              style={styles.remote}
              uid={value}
              channelId={this.state.channelName}
              renderMode={VideoRenderMode.Hidden}
              zOrderMediaOverlay={true}
            />
          );
        })}
      </ScrollView>
    );
  };

  toggleAudio = async () => {
    let mute = this.state.audMute;

    await this._engine.muteLocalAudioStream(mute);
    this.setState({audMute: !mute});
  };

  toggleVideo = async () => {
    let mute = this.state.vidMute;

    await this._engine.muteLocalVideoStream(mute);
    this.setState({vidMute: !mute});
  };

  endCall = async () => {
    await this._engine.leaveChannel();
    this.setState({peerIds: [], joinSucceed: false});
  };

  peerClick = data => {
    let peerIdToSwap = this.state.peerIds.indexOf(data);
    this.setState(prevState => {
      let currentPeers = [...prevState.peerIds];
      let temp = currentPeers[peerIdToSwap];
      currentPeers[peerIdToSwap] = currentPeers[0];
      currentPeers[0] = temp;
      return {peerIds: currentPeers};
    });
  };
}

const styles = StyleSheet.create({
  max: {
    flex: 1,
  },
  buttonHolder: {
    height: 100,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#0093E9',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
  },
  fullView: {
    width: dimensions.width,
    height: dimensions.height - 100,
  },
  remoteContainer: {
    width: '100%',
    height: 150,
    position: 'absolute',
    top: 5,
  },
  remote: {
    width: 150,
    height: 150,
    marginHorizontal: 2.5,
  },
  noUserText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#0093E9',
  },
});
