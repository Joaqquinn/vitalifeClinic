import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarpacientesPage } from './mostrarpacientes.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarpacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarpacientesPageRoutingModule {}
