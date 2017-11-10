import { Profile } from './../profile/profile';

import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';


import { Login } from './../login/login';



@Component({
  selector: 'page-emailconfirm',
  templateUrl: 'emailconfirm.html',
})

export class Emailconfirm {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Emailconfirm');
  }

confirmcode(){
  this.navCtrl.push(Profile);

}

resendcode(){

}

}
