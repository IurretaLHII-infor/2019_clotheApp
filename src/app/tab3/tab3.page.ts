import { Component } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { debuglog } from 'util';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  clotheList = [];
  key:String = "";
  selected:String = "";
  db:firebase.firestore.Firestore;

  constructor() { 
    this.db = firebase.firestore();
}


  searchProduct(){
    this.clotheList = [];
  /*console.log('hi');
  var datab = firebase.database().ref("ClothesProductList");
  //var ref = this.db.ref("ClothesProductList");
  var search = document.getElementById("search");
  datab.orderByChild('price').on("child_added", function(snapshot) {
    console.log(snapshot);
  });
  var a = datab.orderByChild('name').startAt('a');
  console.log(a);


    var db = firebase.database();
    db.ref('ClothesProductList').once('value').then(function(items) {
      console.log(items);
    });
    */
   console.log(this.selected);
    const self = this;
    var ddbb = firebase.firestore();
    //ddbb.collection('ClothesProductList').orderBy('name').endAt(this.key).get().then(function(items) {
    ddbb.collection('ClothesProductList').where('category', '==', this.selected).get().then(function(items) {
      items.forEach(function(item) {
          console.log(item.data());
          self.clotheList.push(item.data());
      });
    });
  }
  searchProductByName(){
    this.clotheList = [];
    console.log(this.key);
    const self = this;
    var ddbb = firebase.firestore();
    ddbb.collection('ClothesProductList').where('name', '==', this.key).get().then(function(items) {
      items.forEach(function(item) {
          console.log(item.data());
          self.clotheList.push(item.data());
      });
    });
  }
}
