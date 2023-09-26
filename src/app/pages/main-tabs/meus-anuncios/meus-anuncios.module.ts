import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusAnunciosPageRoutingModule } from './meus-anuncios-routing.module';

import { MeusAnunciosPage } from './meus-anuncios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusAnunciosPageRoutingModule
  ],
  declarations: [MeusAnunciosPage]
})
export class MeusAnunciosPageModule {}
