import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheItemPageRoutingModule } from './detalhe-item-routing.module';

import { DetalheItemPage } from './detalhe-item.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheItemPageRoutingModule
  ],
  declarations: [DetalheItemPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] //Permite usar o slide de imagens
})
export class DetalheItemPageModule {}
