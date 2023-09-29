import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcoesPerfilPageRoutingModule } from './opcoes-perfil-routing.module';

import { OpcoesPerfilPage } from './opcoes-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcoesPerfilPageRoutingModule
  ],
  declarations: [OpcoesPerfilPage]
})
export class OpcoesPerfilPageModule {}
