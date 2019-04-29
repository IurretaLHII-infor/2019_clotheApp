import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    ngOnInit() {
        let config = {
            apiKey: 'AIzaSyAhO47r8wbhxaFzxPPE67pOjce8MyY10tQ',
            authDomain: 'arropapp.firebaseapp.com',
            databaseURL: 'https://arropapp.firebaseio.com',
            projectId: 'arropapp',
            storageBucket: 'arropapp.appspot.com',
            messagingSenderId: '721077952951'
        };
        firebase.initializeApp(config);
    }
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
