import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorastomadasPageRoutingModule } from './horastomadas-routing.module';

import { HorastomadasPage } from './horastomadas.page';
import { FechasPipe } from 'src/app/pipes/fechas.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorastomadasPageRoutingModule
  ],
  declarations: [HorastomadasPage, FechasPipe]
})
export class HorastomadasPageModule {}
