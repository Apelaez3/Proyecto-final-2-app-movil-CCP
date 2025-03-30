import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientVisitPageRoutingModule } from './client-visit-routing.module';

import { ClientVisitPage } from './client-visit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientVisitPageRoutingModule
  ],
  declarations: [ClientVisitPage]
})
export class ClientVisitPageModule {}
