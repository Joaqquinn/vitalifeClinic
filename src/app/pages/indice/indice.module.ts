import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicePageRoutingModule } from './indice-routing.module';

import { IndicePage } from './indice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicePageRoutingModule
  ],
  declarations: [IndicePage]
})
export class IndicePageModule {}
