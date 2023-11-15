import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorastomadasPage } from './horastomadas.page';

const routes: Routes = [
  {
    path: '',
    component: HorastomadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorastomadasPageRoutingModule {}
