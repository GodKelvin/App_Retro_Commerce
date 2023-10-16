import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasVendasPageRoutingModule } from './minhas-vendas-routing.module';

import { MinhasVendasPage } from './minhas-vendas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasVendasPageRoutingModule
  ],
  declarations: [MinhasVendasPage]
})
export class MinhasVendasPageModule {}
