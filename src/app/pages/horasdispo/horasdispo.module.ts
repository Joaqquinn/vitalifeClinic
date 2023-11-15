import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorasdispoPageRoutingModule } from './horasdispo-routing.module';

import { HorasdispoPage } from './horasdispo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorasdispoPageRoutingModule
  ],
  declarations: [HorasdispoPage]
})
export class HorasdispoPageModule {}
