import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistadoctorPageRoutingModule } from './vistadoctor-routing.module';

import { VistadoctorPage } from './vistadoctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistadoctorPageRoutingModule
  ],
  declarations: [VistadoctorPage]
})
export class VistadoctorPageModule {}
