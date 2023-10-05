import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoEnderecoPageRoutingModule } from './novo-endereco-routing.module';

import { NovoEnderecoPage } from './novo-endereco.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoEnderecoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NovoEnderecoPage]
})
export class NovoEnderecoPageModule {}
