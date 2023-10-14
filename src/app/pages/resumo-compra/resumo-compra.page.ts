import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anuncio } from 'src/app/interfaces/anuncio';
import { Endereco } from 'src/app/interfaces/endereco';
import { RealizaCompra } from 'src/app/interfaces/realiza-compra';
import { Usuario } from 'src/app/interfaces/usuario';
import { CompraService } from 'src/app/services/compra.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-resumo-compra',
  templateUrl: './resumo-compra.page.html',
  styleUrls: ['./resumo-compra.page.scss'],
})
export class ResumoCompraPage implements OnInit {
  anuncio = {} as Anuncio;
  anunciante = {} as Usuario;
  enderecos: Endereco[] = [];
  enderecoEscolhido = {} as Endereco;
  private dataCompra = {} as RealizaCompra;
  
  constructor(
    private route: ActivatedRoute,
    private enderecoService: EnderecoService,
    private toastService: ToastService,
    private compraService: CompraService,
    private loadingService: LoadingService,
    private router: Router
  ) { 
    this.route.params.subscribe(params => {
      this.anuncio = JSON.parse(params["anuncio"]);
      this.anunciante = JSON.parse(params["anunciante"])
    });
  }

  async ngOnInit() {
    await this.getEnderecos();

  }

  async confirmarCompra(){
    if(!this.enderecoEscolhido.id || !this.anuncio.id) return;
    await this.loadingService.showLoading();
    this.dataCompra.anuncioId = this.anuncio.id;
    this.dataCompra.enderecoId = this.enderecoEscolhido.id;

    this.compraService.realizaCompra(this.dataCompra).subscribe({
      next: (response) => {
        this.router.navigate(["/detalhes-pedido", {
          pedido: JSON.stringify(response.message)
          }],
          { skipLocationChange: true }
        )
      },
      error: async(error) => {
        this.toastService.showToastError("Erro ao realizar compra. Por favor, tente mais tarde");
      }
    });

    this.loadingService.hideLoading();
  }


  async getEnderecos(){
    this.enderecoService.getEnderecosUsuario().subscribe({
      next: (response) => {
        this.enderecos = response.message;
      },
      error: async (_error) => {
        this.toastService.showToastError("Erro ao buscar enderecos. Por favor, tente mais tarde.");
      }
    });
  }
}
