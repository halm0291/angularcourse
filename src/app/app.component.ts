import { Component, OnInit } from '@angular/core';
import * as AdapterJS from '../adapter.debug.js';
// import { PerfectScrollbarConfigInterface,
//   PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  stream:MediaStream|any;
  selectedDeviceId:string
  // public config: PerfectScrollbarConfigInterface = {wheelPropagation:true};
  constraints:any

  ngOnInit() {
    AdapterJS.webRTCReady((isUsingPlugin: boolean) => {
       // The WebRTC API is ready.
      // isUsingPlugin: true if the WebRTC plugin is being used, false otherwise
      navigator.mediaDevices.enumerateDevices()
      .then((devices) => {
        console.log(devices);
       //this.selectedDeviceId= devices[1].deviceId
       //console.log('Device selected: '+ this.selectedDeviceId);
       devices.forEach((device:any) => {
        this.createStream(device.deviceId);
      });
      
      });
    });

}
 changeDevice()
  {
    this.constraints = {
      video: false,
      audio: {optional: [{sourceId:this.selectedDeviceId}]}  
      };

      //86a8a8c886cc4c919fccb10441dced8294f3f2ed71b33f7f9923dacec0116324
    const track = this.stream.getAudioTracks()[0];
    let constraints2 = track.getConstraints();
    debugger;
    constraints2.deviceId={exact: this.selectedDeviceId}; 
    track.applyConstraints(constraints2).then(() => {
      console.log('Stream Updated:'+this.stream);
      console.log('Stream AudioTrack:');
      console.log(this.stream.getAudioTracks()[0]);
      console.log('Stream AudioTrack  Constraints:');
      console.log(this.stream.getAudioTracks()[0].getConstraints());

      var audio = document.querySelector('audio');
      audio.srcObject = this.stream;
    });
     // track.applyConstraints(this.constraints)
  
  }

  createStream(deviceId:string){
    console.log('Create Stream');
    this.constraints={
      video: false,
     //audio:true
     audio: {optional: [{sourceId:deviceId}]}  
    }
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia(this.constraints).then((resp) => {
        console.log('Stream Created:');
        console.log(resp);
        this.stream=resp;
      }).catch((err) => {
      console.log(err);
     });
    } else {
      navigator.getUserMedia(this.constraints, (resp) => {
        console.log('Stream Created:'+resp);
        this.stream=resp;
      },
          (err) => {
            console.log(err);
           });
    }
  }

}
