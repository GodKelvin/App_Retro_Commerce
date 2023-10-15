import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumoCompra } from 'src/app/interfaces/resumo-compra';
import { CompraService } from 'src/app/services/compra.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-minhas-vendas',
  templateUrl: './minhas-vendas.page.html',
  styleUrls: ['./minhas-vendas.page.scss'],
})
export class MinhasVendasPage implements OnInit {

  vendas: ResumoCompra[] = [];

  constructor(
    private loadingService: LoadingService,
    private comprasService: CompraService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllVendas();
  }

  verDetalhesVenda(pedido: ResumoCompra){
    this.router.navigate(["/detalhes-venda", {
        pedido: JSON.stringify(pedido)
      }],
      { skipLocationChange: true }
    )
  }

  async getAllVendas(event?: any){
    await this.loadingService.showLoading();
    this.comprasService.getAllVendas().subscribe({
      next: (response) => {
        this.vendas = response.message;
      },
      error: async(error) => {
        this.toastService.showToastError("Falha ao obter vendas. Por favor, tente mais tarde.");
      }
    });
    this.loadingService.hideLoading();
    if(event) event.target.complete();
  }

}
