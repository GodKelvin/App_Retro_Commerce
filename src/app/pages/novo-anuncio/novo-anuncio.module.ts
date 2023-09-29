import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoAnuncioPageRoutingModule } from './novo-anuncio-routing.module';

import { NovoAnuncioPage } from './novo-anuncio.page';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoAnuncioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NovoAnuncioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] //Permite usar o slide de imagens
})
export class NovoAnuncioPageModule {}
