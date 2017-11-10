
import { Facebook } from '@ionic-native/facebook';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController,LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { TranslateService } from 'ng2-translate';
import { AppLanguagesProvider } from './../providers/app-languages/app-languages';


import { HomePage } from '../pages/home/home';
import { GetjobsPage } from '../pages/getjobs/getjobs';
import { Login } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: NavController
  rootPage: any = Login;
  pages: Array<{ title: any, component: any, icon: String }>;
  profilepicURL :String;
  username: String;
  user: any;

  constructor(platform: Platform, private translate: TranslateService, private appLanguages: AppLanguagesProvider, public statusBar: StatusBar, public splashScreen: SplashScreen, public nativeStorage: NativeStorage, public fb: Facebook, private menu: MenuController,public loading : LoadingController ) {

    platform.ready().then(() => {
      //set default language this.translate.setDefaultLang("th");
      this.configNG2();

      // Here we will check if the user is already logged in

       //check facebook logined
      this.fb.getLoginStatus().then((res)=>{
        if (res.status === 'connected') {
          this.nav.setRoot(GetjobsPage);
          this.splashScreen.hide();
        }else{
          this.nav.setRoot(Login);
          this.splashScreen.hide();
        }
      });

      // because we don't want to ask users to log in each time they open the app
      let env = this;
      env.nativeStorage.getItem('user').then(function (data) {
        env.username = data.name;
          env.profilepicURL = data.picture;
        env.nav.setRoot(GetjobsPage);
        
        env.splashScreen.hide();
      }, function (err) {
        //env.nav.push(Login);
        env.splashScreen.hide();
      })

     

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

    });

    this.pages = [
      { title: 'jobs', component: GetjobsPage , icon: "1" },
      { title: 'queue', component: HomePage, icon: "2" },
      { title: 'groupUnder', component: HomePage, icon: "3" },
      { title: 'cashier', component: HomePage, icon: "4" },
      //{ title: 'history', component: HomePage, icon: "99" },
      { title: 'favorite', component: HomePage, icon: "5" },
      { title: 'premium', component: HomePage, icon: "6" },
      { title: 'language_text', component: HomePage, icon: "7" },
      { title: 'notification', component: HomePage, icon: "8" },
      { title: 'help', component: HomePage, icon: "9" }
    ]

    //this.profilepicURL = "../assets/img_home/3-img.png";

  }

  private configNG2() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('TH');

    // Detect current Language
    var userLang = navigator.language.split("-")[0];
    userLang = (this.appLanguages.getLanguages().indexOf(userLang) > -1) ? userLang : 'TH';

    //the lang to use, if the lang is not available, it will use the current loader to get them
    this.translate.use(userLang);
  }

  public openPage(p) {
    this.menu.close();
    this.nav.push(p.component);
    //this.nav.setRoot(p.component);
  }

  doFbLogout() {
    
    var nav = this.nav;
    let env = this;
    let loading = env.loading.create({
      content: "Loading ..."
    });
    loading.present();
    this.fb.logout().then(function (data) {
      env.nativeStorage.remove('user');
      env.menu.close();
      nav.setRoot(Login);
      loading.dismiss();
    }, function (error) {
      console.log(error);
    })
  }




}

