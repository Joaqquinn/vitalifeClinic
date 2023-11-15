import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaadminPageRoutingModule } from './vistaadmin-routing.module';

import { VistaadminPage } from './vistaadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaadminPageRoutingModule
  ],
  declarations: [VistaadminPage]
})
export class VistaadminPageModule {}
