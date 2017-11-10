import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { NavController } from 'ionic-angular';
import { AppLanguagesProvider } from './../../providers/app-languages/app-languages';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  text: string;
  private languages : Array<String>;

  constructor(public translate : TranslateService,
  public appLanguages: AppLanguagesProvider) {
    this.languages = appLanguages.getLanguages();
    //console.log('Hello HeaderComponent Component');
    //this.text = 'Hello World';
  }

}
