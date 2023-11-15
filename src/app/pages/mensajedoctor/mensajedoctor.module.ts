import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajedoctorPageRoutingModule } from './mensajedoctor-routing.module';

import { MensajedoctorPage } from './mensajedoctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajedoctorPageRoutingModule
  ],
  declarations: [MensajedoctorPage]
})
export class MensajedoctorPageModule {}
