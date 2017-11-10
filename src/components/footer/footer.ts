import { HomePage } from './../../pages/home/home';
import { NavController } from 'ionic-angular';
import { Component,Input,Output } from '@angular/core';



/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {

  navmenutxt : String;

 @Input('footnavmenu') footnavmenutxt;

  constructor(public nav:NavController) {
    console.log('Hello FooterComponent Component');
    this.navmenutxt = this.footnavmenutxt
  }

ngAfterViewInit(){
  this.navmenutxt = this.footnavmenutxt;
}

openPage(txt){
  switch(txt){
    case "home":
      if(this.navmenutxt != txt){
        this.nav.push(HomePage);
      }
      
    break;
    default:
      alert(txt);
    break;
  
  }
  
}

}
