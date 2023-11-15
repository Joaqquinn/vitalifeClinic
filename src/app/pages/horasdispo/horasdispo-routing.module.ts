import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorasdispoPage } from './horasdispo.page';

const routes: Routes = [
  {
    path: '',
    component: HorasdispoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorasdispoPageRoutingModule {}
