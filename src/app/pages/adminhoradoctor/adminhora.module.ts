import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminhoraPageRoutingModule } from './adminhora-routing.module';

import { AdminhoraPage } from './adminhora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminhoraPageRoutingModule
  ],
  declarations: [AdminhoraPage]
})
export class AdminhoraPageModule {}
