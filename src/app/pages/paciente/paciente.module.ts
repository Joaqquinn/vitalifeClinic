import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientePageRoutingModule } from './paciente-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PacientePage } from './paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PacientePage]
})
export class PacientePageModule {}
