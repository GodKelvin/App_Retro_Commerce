import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'main-tabs',
    loadChildren: () => import('./pages/main-tabs/main-tabs.module').then( m => m.MainTabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'novo-anuncio',
    loadChildren: () => import('./pages/novo-anuncio/novo-anuncio.module').then( m => m.NovoAnuncioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detalhe-item/:id',
    loadChildren: () => import('./pages/detalhe-item/detalhe-item.module').then( m => m.DetalheItemPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'novo-endereco',
    loadChildren: () => import('./pages/novo-endereco/novo-endereco.module').then( m => m.NovoEnderecoPageModule)
  },
  {
    path: 'resumo-compra',
    loadChildren: () => import('./pages/resumo-compra/resumo-compra.module').then( m => m.ResumoCompraPageModule)
  },
  {
    path: 'detalhes-pedido',
    loadChildren: () => import('./pages/detalhes-pedido/detalhes-pedido.module').then( m => m.DetalhesPedidoPageModule)
  },
  {
    path: 'detalhes-venda',
    loadChildren: () => import('./pages/detalhes-venda/detalhes-venda.module').then( m => m.DetalhesVendaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
