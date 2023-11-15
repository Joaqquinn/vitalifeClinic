import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarhoraPageRoutingModule } from './modificarhora-routing.module';

import { ModificarhoraPage } from './modificarhora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarhoraPageRoutingModule
  ],
  declarations: [ModificarhoraPage]
})
export class ModificarhoraPageModule {}
