import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoramedicaPage } from './horamedica.page';

const routes: Routes = [
  {
    path: '',
    component: HoramedicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoramedicaPageRoutingModule {}
