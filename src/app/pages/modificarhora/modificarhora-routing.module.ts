import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarhoraPage } from './modificarhora.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarhoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarhoraPageRoutingModule {}
