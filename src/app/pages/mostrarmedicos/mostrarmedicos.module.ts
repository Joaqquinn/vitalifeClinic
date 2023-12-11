import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { IonicModule } from '@ionic/angular';
import { MostrarmedicosPageRoutingModule } from './mostrarmedicos-routing.module';
import { MostrarmedicosPage } from './mostrarmedicos.page';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarmedicosPageRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule
  ],
  declarations: [MostrarmedicosPage]
})
export class MostrarmedicosPageModule {}
