import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajedoctorPage } from './mensajedoctor.page';

const routes: Routes = [
  {
    path: '',
    component: MensajedoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajedoctorPageRoutingModule {}
