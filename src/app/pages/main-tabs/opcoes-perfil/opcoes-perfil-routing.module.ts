import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcoesPerfilPage } from './opcoes-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: OpcoesPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcoesPerfilPageRoutingModule {}
