import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumoCompraPageRoutingModule } from './resumo-compra-routing.module';

import { ResumoCompraPage } from './resumo-compra.page';
import { DetalheItemComponent } from 'src/app/components/detalhe-item/detalhe-item.component';
import { DetalheVendedorComponent } from 'src/app/components/detalhe-vendedor/detalhe-vendedor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumoCompraPageRoutingModule,
    DetalheItemComponent,
    DetalheVendedorComponent
  ],
  declarations: [ResumoCompraPage]
})
export class ResumoCompraPageModule {}
