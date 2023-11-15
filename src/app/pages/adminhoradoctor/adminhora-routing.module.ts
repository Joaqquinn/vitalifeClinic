import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminhoraPage } from './adminhora.page';

const routes: Routes = [
  {
    path: '',
    component: AdminhoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminhoraPageRoutingModule {}
