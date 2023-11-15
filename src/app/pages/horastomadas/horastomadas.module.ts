import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorastomadasPageRoutingModule } from './horastomadas-routing.module';

import { HorastomadasPage } from './horastomadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorastomadasPageRoutingModule
  ],
  declarations: [HorastomadasPage]
})
export class HorastomadasPageModule {}
