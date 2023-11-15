import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoexamenesPage } from './resultadoexamenes.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoexamenesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoexamenesPageRoutingModule {}
