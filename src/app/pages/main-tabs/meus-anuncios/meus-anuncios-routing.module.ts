import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusAnunciosPage } from './meus-anuncios.page';

const routes: Routes = [
  {
    path: '',
    component: MeusAnunciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusAnunciosPageRoutingModule {}
