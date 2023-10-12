import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.page.html',
  styleUrls: ['./meus-pedidos.page.scss'],
})
export class MeusPedidosPage implements OnInit {

  pedidos: any[] = [];
  constructor(
    private comprasService: CompraService,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllCompras();
  }

  verDetalhesPedido(pedido: any){
    this.router.navigate(["/detalhes-pedido", {
        pedido: JSON.stringify(pedido)
      }],
      { skipLocationChange: true }
    )
  }


  async getAllCompras(event?: any){
    await this.loadingService.showLoading();
    this.comprasService.getAllCompras().subscribe({
      next: (response) => {
        this.pedidos = response.message;
      },
      error: async(error) => {
        this.toastService.showToastError("Falha ao obter pedidos. Por favor, tente mais tarde.");
      }
    });
    this.loadingService.hideLoading();
    if(event) event.target.complete();
  }
}
