import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetjobsPage } from './getjobs';

@NgModule({
  declarations: [
    GetjobsPage,
  ],
  imports: [
    IonicPageModule.forChild(GetjobsPage),
  ],
})
export class GetjobsPageModule {}
