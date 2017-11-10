import { GetjobsprofilePage } from './../getjobsprofile/getjobsprofile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-getjobs',
  templateUrl: 'getjobs.html',
})
export class GetjobsPage {

   footnavmenu : String; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.footnavmenu = '';
  }
  ionViewCanEnter(){
 this.footnavmenu = '';
  }

  goto(t){
    if(t == 'getjob'){
     // this.navCtrl.push(GetjobsprofilePage);
    }else{
      alert(t);
    }
  }
 

}
