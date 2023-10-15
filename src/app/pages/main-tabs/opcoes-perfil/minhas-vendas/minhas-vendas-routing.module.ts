import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhasVendasPage } from './minhas-vendas.page';

const routes: Routes = [
  {
    path: '',
    component: MinhasVendasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhasVendasPageRoutingModule {}
