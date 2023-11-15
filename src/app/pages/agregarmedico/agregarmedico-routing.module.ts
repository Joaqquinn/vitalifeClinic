import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarmedicoPage } from './agregarmedico.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarmedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarmedicoPageRoutingModule {}
