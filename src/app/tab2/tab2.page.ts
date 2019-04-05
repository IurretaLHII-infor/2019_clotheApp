import { Component } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  clotheList = [];

  constructor() {}

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {

// tslint:disable-next-line: prefer-const
    let config = {
      apiKey: 'AIzaSyAhO47r8wbhxaFzxPPE67pOjce8MyY10tQ',
      authDomain: 'arropapp.firebaseapp.com',
      databaseURL: 'https://arropapp.firebaseio.com',
      projectId: 'arropapp',
      storageBucket: 'arropapp.appspot.com',
      messagingSenderId: '721077952951'
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();
  var self = this;
// tslint:disable-next-line: prefer-const
  db.collection('ClothesProductList').get().then(function (querySnapshot) {
  querySnapshot.forEach(function (doc) {
      console.log(doc.id, ' => ', doc.data());
      self.clotheList.push(doc.data());
      });
    });
  }
}
