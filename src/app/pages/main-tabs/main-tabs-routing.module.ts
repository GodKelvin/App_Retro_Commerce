import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainTabsPage } from './main-tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: '',
    component: MainTabsPage,
    children:[
      {
        path: "home",
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'meus-anuncios',
        loadChildren: () => import('./meus-anuncios/meus-anuncios.module').then( m => m.MeusAnunciosPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainTabsPageRoutingModule {}
