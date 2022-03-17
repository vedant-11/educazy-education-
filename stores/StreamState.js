import {action, makeObservable, observable} from 'mobx';

export class StreamState{
    var myStream = null;
    constructor(){
        makeObservable(this,{
            myStream:observable,
            joinChat:action
        });
    }

    joinChat (stream) {
        const roomId = 'asdfghjkl456789qwrtyi';
        myStream = stream;
        
    }

    addStream(){
    }

    addRemoteStream(){

    }
}