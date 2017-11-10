
import { NativeStorage } from '@ionic-native/native-storage';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { HomePage } from './../home/home';
import { Login } from './../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {
  private bgimage:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bgimage = "../assets/cover_image_no_image.png";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }

  uploadimg(){
    alert("upload a image")
  }

}
