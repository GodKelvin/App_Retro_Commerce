import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcoesPerfilPage } from './opcoes-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: OpcoesPerfilPage
  },
  {
    path: 'meus-enderecos',
    loadChildren: () => import('./meus-enderecos/meus-enderecos.module').then( m => m.MeusEnderecosPageModule)
  },
  {
    path: 'meus-pedidos',
    loadChildren: () => import('./meus-pedidos/meus-pedidos.module').then( m => m.MeusPedidosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcoesPerfilPageRoutingModule {}
