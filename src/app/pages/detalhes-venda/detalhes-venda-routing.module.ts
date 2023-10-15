import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesVendaPage } from './detalhes-venda.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesVendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesVendaPageRoutingModule {}
