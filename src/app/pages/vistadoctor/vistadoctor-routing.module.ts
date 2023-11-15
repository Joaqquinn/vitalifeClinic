import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistadoctorPage } from './vistadoctor.page';

const routes: Routes = [
  {
    path: '',
    component: VistadoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistadoctorPageRoutingModule {}
