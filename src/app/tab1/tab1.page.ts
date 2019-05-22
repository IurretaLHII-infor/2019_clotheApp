import { Component } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    ngOnInit() {
        // tslint:disable-next-line: prefer-const
        var contactIcon = document.getElementById("loggedImg");

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log("User is signed in.");
                contactIcon.style.color = "#004DFF";
                if (user.uid == 'uyYPiQN3A4RPtIjINrbJzfhCC1q1') {
                    contactIcon.style.color = "#00FFA6";
                }

            }else {
                console.log("No user is signed in.");
                contactIcon.style.color = "#000000";
            }
        });
    }
        

}
