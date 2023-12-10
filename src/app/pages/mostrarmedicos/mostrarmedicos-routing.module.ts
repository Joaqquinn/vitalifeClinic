import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarmedicosPage } from './mostrarmedicos.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarmedicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarmedicosPageRoutingModule {}
