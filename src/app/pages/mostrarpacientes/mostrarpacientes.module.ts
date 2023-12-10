import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarpacientesPageRoutingModule } from './mostrarpacientes-routing.module';

import { MostrarpacientesPage } from './mostrarpacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarpacientesPageRoutingModule
  ],
  declarations: [MostrarpacientesPage]
})
export class MostrarpacientesPageModule {}
