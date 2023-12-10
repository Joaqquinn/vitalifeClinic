import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarmedicoPageRoutingModule } from './registrarmedico-routing.module';

import { RegistrarmedicoPage } from './registrarmedico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarmedicoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarmedicoPage]
})
export class RegistrarmedicoPageModule {}
