import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { NavController, NavParams,ViewController } from 'ionic-angular';

import { TranslateService } from 'ng2-translate';
import { AppLanguagesProvider } from './../../providers/app-languages/app-languages';

import { Login } from './../login/login';
import { Emailconfirm } from './../emailconfirm/emailconfirm';


@Component({
  selector: 'page-emailregister',
  templateUrl: 'emailregister.html',
})
export class Emailregister {

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,public viewCtrl : ViewController,
  public translate : TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Emailregister');
    this.translate.get('back_button').subscribe(res=>{
this.viewCtrl.setBackButtonText('back_button');
    })
    
  }

  registerEmail(){
    this.navCtrl.push(Emailconfirm);

  }

}
