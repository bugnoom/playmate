import { Emailregister } from './../emailregister/emailregister';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import {ViewController} from 'ionic-angular';
import { Component } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage} from '@ionic-native/native-storage';

import { TranslateService } from 'ng2-translate';
import { AppLanguagesProvider } from './../../providers/app-languages/app-languages';


import { HomePage } from './../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  // Variable for language
  private languages: Array<String>;

  //facebook ID
  private FB_APP_ID : number = 260240461132847;
  

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public viewCtrl : ViewController,
    public fb: Facebook,
    public loading : LoadingController,
    public nativeStorage: NativeStorage,
    public translate : TranslateService,
    public appLanguages: AppLanguagesProvider
    ) {
      this.fb.browserInit(this.FB_APP_ID,"v2.8");
      this.languages = appLanguages.getLanguages();
      
      console.log('log language = '+this.languages);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
   
   console.log("L : " + this.translate.instant("back_button"));
     //this.viewCtrl.setBackButtonText('back-button');
    
  }

  fblogin() {
    let loading = this.loading.create({
      content : 'Check Data ....'
    })

    let permission = new Array<string>();
    let nav = this.navCtrl;
    let env = this;

    permission = ['public_profile','email'];

    loading.present();

    this.fb.login(permission).then(function(resp){
      console.log("REST = "+resp);
      let userId = resp.authResponse.userID;
      let params = new Array<string>();

    //Getting name and gender properties
    env.fb.api("/me?fields=name,gender",params).then(function(user){
      user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
      //now we have the users info, let's save it in the NativeStorage
      env.nativeStorage.setItem('facebook','1');
      env.nativeStorage.setItem('user',{
        name: user.name,
        gender: user.gender,
        picture: user.picture
      }).then(function(){
        //nav.push(HomePage);
        loading.dismiss();
        nav.setRoot(HomePage);
      },function(err){
        console.log('Error'+err);
      })
    })
    },function(error){
      console.log(error);
      alert(JSON.stringify(error));
    })

  }

  loginForm(){
    let env = this;
    env.nativeStorage.setItem('facebook','0');
    env.nativeStorage.setItem('user',{
      name: '',
      gender:'',
      picture:''
    })

    //set user profile parameter
    /*env.nativeStorage.setItem('user',{
        name: user.name,
        gender: user.gender,
        picture: user.picture
        }) */
  }

  register(){
    this.navCtrl.push(Emailregister)
  }

}
