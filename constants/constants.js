import IO from 'socket.io-client'
import Peer from 'react-native-peerjs'
export const API_URI = 'http://192.168.43.165:5000' 

export const socket = IO(`${API_URI}`,{
    forceNew:true
})

export const joinRoom= () =>async {

}