import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TranslateService } from 'ng2-translate';
import { AppLanguagesProvider } from './../../providers/app-languages/app-languages';

import { Login } from './../login/login';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user :any;
  userReady: boolean = false;
  private languages: Array<String>;
  footnavmenu : String; 

  constructor(public navCtrl: NavController,
  public fb: Facebook,
  public nativeStorage: NativeStorage,
  public translate : TranslateService,
  public appLanguages: AppLanguagesProvider){

  this.languages = appLanguages.getLanguages();
  
  }

ionViewCanEnter(){
 this.footnavmenu = 'home';

let env = this;
 this.nativeStorage.getItem('user').then(function(resp){
   env.user = {
     name: resp.name,
     gender: resp.gender,
     picture: resp.picture
   };
   env.userReady = true;
 },function(err){
  console.log(err);
 });
}






}