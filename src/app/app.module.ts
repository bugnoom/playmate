
import { Facebook } from '@ionic-native/facebook';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import { NativeStorage } from '@ionic-native/native-storage';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule, Http} from '@angular/http';
import {TranslateModule,TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import { AppLanguagesProvider } from './../providers/app-languages/app-languages';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from './../pages/login/login';
import { Emailregister } from './../pages/emailregister/emailregister';
import { Emailconfirm } from './../pages/emailconfirm/emailconfirm';
import { Profile } from './../pages/profile/profile';
import { GetjobsPage } from './../pages/getjobs/getjobs';
import { GetjobsprofilePage } from './../pages/getjobsprofile/getjobsprofile';



import { HeaderComponent } from './../components/header/header';
import { FooterComponent } from './../components/footer/footer';


export function createTranslateLoader(http:Http){
  return new TranslateStaticLoader(http,'./assets/i18n','.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Emailconfirm,
    Emailregister,
    Profile,
    HeaderComponent,
    FooterComponent,
    GetjobsPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    TranslateModule.forRoot({
      provide:TranslateLoader,
      useFactory:(createTranslateLoader),
      deps:[Http]
    }),
    IonicModule.forRoot(MyApp,{
      backButtonText: ""
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Emailconfirm,
    Emailregister,
    HeaderComponent,
    FooterComponent,
    Profile,
    GetjobsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    Facebook,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppLanguagesProvider
  ]
})
export class AppModule {}
