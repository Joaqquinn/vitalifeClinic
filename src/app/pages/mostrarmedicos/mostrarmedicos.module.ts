import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarmedicosPageRoutingModule } from './mostrarmedicos-routing.module';

import { MostrarmedicosPage } from './mostrarmedicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarmedicosPageRoutingModule
  ],
  declarations: [MostrarmedicosPage]
})
export class MostrarmedicosPageModule {}
