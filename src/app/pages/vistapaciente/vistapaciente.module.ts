import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { VistapacientePageRoutingModule } from './vistapaciente-routing.module';

import { VistapacientePage } from './vistapaciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistapacientePageRoutingModule
  ],
  declarations: [VistapacientePage]
})
export class VistapacientePageModule {}
