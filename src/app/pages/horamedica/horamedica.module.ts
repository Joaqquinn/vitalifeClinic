import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoramedicaPageRoutingModule } from './horamedica-routing.module';

import { HoramedicaPage } from './horamedica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoramedicaPageRoutingModule
  ],
  declarations: [HoramedicaPage]
})
export class HoramedicaPageModule {}
