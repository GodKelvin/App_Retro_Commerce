import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesPedidoPageRoutingModule } from './detalhes-pedido-routing.module';

import { DetalhesPedidoPage } from './detalhes-pedido.page';
import { DetalheItemComponent } from 'src/app/components/detalhe-item/detalhe-item.component';
import { DetalheVendedorComponent } from 'src/app/components/detalhe-vendedor/detalhe-vendedor.component';
import { DetalheEnderecoComponent } from 'src/app/components/detalhe-endereco/detalhe-endereco.component';
import { StatusCompraComponent } from 'src/app/components/status-compra/status-compra.component';
import { CodigoRastreioComponent } from 'src/app/components/codigo-rastreio/codigo-rastreio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheItemComponent,
    DetalhesPedidoPageRoutingModule,
    DetalheVendedorComponent,
    DetalheEnderecoComponent,
    StatusCompraComponent,
    CodigoRastreioComponent
  ],
  declarations: [DetalhesPedidoPage]
})
export class DetalhesPedidoPageModule {}
