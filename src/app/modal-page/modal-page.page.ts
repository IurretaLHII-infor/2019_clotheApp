import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage{
    private form: FormGroup;

    constructor(private modal: ModalController, params: NavParams, builder: FormBuilder) {
        this.form = builder.group({
            name: ['', Validators.required],
            description: [''],
        });
        let values = params.get("entity");
        this.form.setValue(values);
    }


}
