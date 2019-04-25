import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
import * as firebase from 'firebase';
import 'firebase/firestore';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  clotheList = [];

  constructor(private controller: ModalController) { }

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
    const self = this;
  // tslint:disable-next-line: prefer-const
    db.collection('ClothesProductList').get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        console.log(doc.id, ' => ', doc.data());
        self.clotheList.push(doc);
        });
      });
  }

    async newProduct() {
        let product = { name: "", description: "" };

        //create a modal within ModalController instance
        const modal = await this.controller.create({
            //modal will be a ProdutPage
            component: ModalPagePage,
            //send the product to modal as 'entity' keyed param
            componentProps: { 'entity': product },
        });

        //register the modal closed callback
        modal.onDidDismiss().then(response => {
            if (response.data) {
                //add saved product to list
                this.clotheList.push(response.data);
            }
            else {
                //modal cancelled. Nothing to so.
            }
        });

        return await modal.present();
    }

    /**
     * Edit Product Modal
     */
    async updateProduct(product: {}) {
        const modal = await this.controller.create({
            component: ModalPagePage,
            componentProps: { 'entity': product },
        });

        return await modal.present();
    }

  async presentModal(item) {
    console.log(item);
      const modal = await this.controller.create({
      component: ModalPagePage,
      componentProps: item,
    });
    return await modal.present();
  }
}
