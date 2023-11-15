import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarmedicoPageRoutingModule } from './agregarmedico-routing.module';

import { AgregarmedicoPage } from './agregarmedico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarmedicoPageRoutingModule
  ],
  declarations: [AgregarmedicoPage]
})
export class AgregarmedicoPageModule {}
