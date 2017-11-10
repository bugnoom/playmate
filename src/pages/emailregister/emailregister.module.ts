import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Emailregister } from './emailregister';

@NgModule({
  declarations: [
    Emailregister,
  ],
  imports: [
    IonicPageModule.forChild(Emailregister),
  ],
})
export class EmailregisterModule {}
