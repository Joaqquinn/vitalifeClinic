import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoexamenesPageRoutingModule } from './resultadoexamenes-routing.module';

import { ResultadoexamenesPage } from './resultadoexamenes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoexamenesPageRoutingModule
  ],
  declarations: [ResultadoexamenesPage]
})
export class ResultadoexamenesPageModule {}
