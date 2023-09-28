import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheItemPage } from './detalhe-item.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheItemPageRoutingModule {}
