import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistapacientePage } from './vistapaciente.page';

const routes: Routes = [
  {
    path: '',
    component: VistapacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistapacientePageRoutingModule {}
