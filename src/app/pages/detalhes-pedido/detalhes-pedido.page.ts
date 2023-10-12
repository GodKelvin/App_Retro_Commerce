import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anuncio } from 'src/app/interfaces/anuncio';
import { ResumoCompra } from 'src/app/interfaces/resumo-compra';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-detalhes-pedido',
  templateUrl: './detalhes-pedido.page.html',
  styleUrls: ['./detalhes-pedido.page.scss'],
})
export class DetalhesPedidoPage implements OnInit {
  pedido = {} as ResumoCompra;
  anuncio = {} as Anuncio;
  constructor(
    private route: ActivatedRoute,
    private anuncioService: AnuncioService,
    private toastService: ToastService,
    private loadingService: LoadingService
  ) { 
    this.route.params.subscribe(params => {
      this.pedido = JSON.parse(params["pedido"]);
    });
  }

  async ngOnInit() {
    await this.loadingService.showLoading();
    this.getDataAnuncio();
    this.loadingService.hideLoading();
  }

  private async getDataAnuncio(){
    this.anuncioService.getDetalheAnuncio(String(this.pedido.anuncioId)).subscribe({
      next: (response) => {
        this.anuncio = response.message
      },
      error: async (error) => {
        this.toastService.showToastError("Erro ao obter detalhes do pedido.");
      }
    });
  }

  private async getDataEndereco(){
    
  }


}
