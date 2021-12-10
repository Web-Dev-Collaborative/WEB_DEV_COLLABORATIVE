import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

declare var audioinput;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  isCapturing: boolean;

  constructor(
    private platform: Platform,
    private backgroundMode: BackgroundMode
  ) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.backgroundMode.enable();
      window.addEventListener('audioinput', (event: any) => {
        const data = event.data;
        const raw = this.normalizeAudio(data);
        console.log('raw is power two', this.isPowerOfTwo(raw.length));
        console.log('raw length', raw.length);
      }, false);

      this.requestPermissions();
    });
  }

  startCapture() {
    audioinput.start({normalize: false});
    this.isCapturing = true;
  }

  stopCapture() {
    audioinput.stop();
    this.isCapturing = false;
  }

  requestPermissions() {
    audioinput.checkMicrophonePermission((hasPermission) => {
      if (hasPermission) {
        console.log('We already have permission to record.');
      } else {
        audioinput.getMicrophonePermission((hasPermission2) => {
          if (hasPermission2) {
            console.log('User granted us permission to record.');
          } else {
            console.warn('User denied permission to record.');
          }
        });
      }
    });
  }

  private isPowerOfTwo(num: number) {
    while (((num % 2) === 0) && num > 1) {
      num /= 2;
    }
    return (num === 1);
  }

  private normalizeAudio(pcmData) {
    return Float32Array.from(pcmData, (i: any) => {
      return parseFloat(i) / 32767.0;
    });
  }

}
