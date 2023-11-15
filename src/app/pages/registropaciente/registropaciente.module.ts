import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistropacientePageRoutingModule } from './registropaciente-routing.module';

import { RegistropacientePage } from './registropaciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistropacientePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistropacientePage]
})
export class RegistropacientePageModule {}
