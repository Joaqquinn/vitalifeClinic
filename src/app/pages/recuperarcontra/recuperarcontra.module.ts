import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarcontraPageRoutingModule } from './recuperarcontra-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RecuperarcontraPage } from './recuperarcontra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RecuperarcontraPageRoutingModule
  ],
  declarations: [RecuperarcontraPage]
})
export class RecuperarcontraPageModule {}
