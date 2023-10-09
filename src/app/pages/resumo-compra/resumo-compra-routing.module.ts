import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumoCompraPage } from './resumo-compra.page';

const routes: Routes = [
  {
    path: '',
    component: ResumoCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumoCompraPageRoutingModule {}
