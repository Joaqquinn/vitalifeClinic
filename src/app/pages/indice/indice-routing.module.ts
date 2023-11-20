import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicePage } from './indice.page';

const routes: Routes = [
  {
    path: '',
    component: IndicePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicePageRoutingModule {}
