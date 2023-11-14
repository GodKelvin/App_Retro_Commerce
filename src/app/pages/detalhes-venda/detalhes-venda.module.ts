import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesVendaPageRoutingModule } from './detalhes-venda-routing.module';

import { DetalhesVendaPage } from './detalhes-venda.page';
import { DetalheItemComponent } from 'src/app/components/detalhe-item/detalhe-item.component';
import { DetalheEnderecoComponent } from 'src/app/components/detalhe-endereco/detalhe-endereco.component';
import { DetalheVendedorComponent } from 'src/app/components/detalhe-vendedor/detalhe-vendedor.component';
import { StatusCompraComponent } from 'src/app/components/status-compra/status-compra.component';
import { CodigoRastreioComponent } from 'src/app/components/codigo-rastreio/codigo-rastreio.component';
import { SliderFotosComponent } from 'src/app/components/slider-fotos/slider-fotos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesVendaPageRoutingModule,
    DetalheItemComponent,
    DetalheEnderecoComponent,
    DetalheVendedorComponent,
    StatusCompraComponent,
    CodigoRastreioComponent,
    SliderFotosComponent
  ],
  declarations: [DetalhesVendaPage]
})
export class DetalhesVendaPageModule {}
