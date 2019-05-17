import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
//import { ModalPagePage } from '../modal-page/modal-page.page';
import * as firebase from 'firebase';
import 'firebase/firestore';


@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    clotheList = [];
    db:firebase.firestore.Firestore;

    constructor(private controller: ModalController) { 
        this.db = firebase.firestore();
    }

    // tslint:disable-next-line: use-life-cycle-interface
    ngOnInit() {
        // tslint:disable-next-line: prefer-const
        const self = this;
        // tslint:disable-next-line: prefer-const
        this.db.collection('ClothesProductList').get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id, ' => ', doc.data());
                self.clotheList.push(doc);
            });
        });

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log("User is signed in.");
                console.log("User: " + user.uid + ", " + user.email);
                if (user.uid != 'uyYPiQN3A4RPtIjINrbJzfhCC1q1') {
                    const myElement = document.getElementById('addProductBtn');
                    console.log("myElement: " + myElement.id);
                    myElement.setAttribute("disabled", "true");
                    myElement.style.display = "none";
                }

            } else {
                console.log("No user is signed in.");
                const myElement = document.getElementById('addProductBtn');
                const favBtn = document.getElementsByName('star');
                console.log("myElement: " + myElement.id);
                myElement.setAttribute("disabled", "true");
                myElement.style.display = "none";
                console.log("start id: " + favBtn);
                //favBtn.setAttribute("disabled", "true");
                //favBtn.style.display = "none";
                //document.getElementsByName("star")[0].setAttribute("disabled", "true");

            }
        });
    }
    

     /*deleteProductTab2(itemId) {
            var choose = confirm("Are you sure about deleting this product?");
            console.log("Choose " + choose);
            //const self = this;
            if (choose) {
                this.db.collection("ClothesProductList").doc(itemId).delete().then(() => {
                    console.log("Document successfully deleted!");
                    this.clotheList.splice(this.clotheList.indexOf(item), 1);
                }).catch(function (error) {
                    console.error("Error removing document: ", error);
                });
            }
     }*/
}