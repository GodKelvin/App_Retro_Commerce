import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anuncio } from 'src/app/interfaces/anuncio';
import { Endereco } from 'src/app/interfaces/endereco';
import { ResumoCompra } from 'src/app/interfaces/resumo-compra';
import { Usuario } from 'src/app/interfaces/usuario';
import { EnderecoService } from 'src/app/services/endereco.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VendaService } from 'src/app/services/venda.service';

@Component({
  selector: 'app-detalhes-venda',
  templateUrl: './detalhes-venda.page.html',
  styleUrls: ['./detalhes-venda.page.scss'],
})
export class DetalhesVendaPage implements OnInit {
  venda = {} as ResumoCompra;
  anuncio = {} as Anuncio;
  comprador = {} as Usuario;
  endereco = {} as Endereco;
  novoCodigoRastreio: string = "";

  constructor(
    private route: ActivatedRoute,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private usuarioService: UsuarioService,
    private enderecoService: EnderecoService,
    private vendaService: VendaService
  ) { 
    this.route.params.subscribe(params => {
      this.venda = JSON.parse(params["pedido"]);
    });
  }

  async ngOnInit() {
    await this.loadingService.showLoading();
    this.getDataAnuncio();
    this.getComprador();
    this.getDataEndereco();
    this.loadingService.hideLoading();
  }

  async aceitarComprovante(){
    await this.loadingService.showLoading();
    this.vendaService.aceitarComprovantePagamento(this.venda.id).subscribe({
      next: (response) => {
        this.venda = response.message;
        this.loadingService.hideLoading();
        this.toastService.showToastSuccess("Venda atualizada com sucesso");
      },
      error: async(error) => {
        this.toastService.showToastError("Não foi possivel atualizar a venda. Por favor, tente mais tarde");
        this.loadingService.hideLoading();
      }
    });
  }

  async recusarComprovante(){
    await this.loadingService.showLoading();
    this.vendaService.recusarComprovantePagamento(this.venda.id).subscribe({
      next: (response) => {
        this.venda = response.message;
        this.loadingService.hideLoading();
        this.toastService.showToastSuccess("Venda atualizada com sucesso");
      },
      error: async(_error) => {
        this.toastService.showToastError("Não foi possivel atualizar a venda. Por favor, tente mais tarde");
        this.loadingService.hideLoading();
      }
    });
  }

  async updateRastreio(){
    if(!this.novoCodigoRastreio) return;
    await this.loadingService.showLoading();
    this.vendaService.updateCodRastreio(this.venda.id, this.novoCodigoRastreio).subscribe({
      next: (response) => {
        this.venda = response.message;
        this.toastService.showToastSuccess("Código de rastreio atualizado com sucesso!");
        this.loadingService.hideLoading();
      },
      error: async (_error) => {
        this.toastService.showToastError("Não foi possível atualizar o código de rastreio. Por favor, tente mais tarde");
        this.loadingService.hideLoading();
      }
    });
  }

  private async getDataAnuncio(){
    this.vendaService.getDetalhesItemVenda(this.venda.id).subscribe({
      next: (response) => {
        this.anuncio = response.message;
      },
      error: async (error) => {
        this.toastService.showToastError("Erro ao obter detalhes do pedido.");
      }
    });
  }

  private async getComprador(){
    this.usuarioService.getDetalhesUsuario(String(this.venda.comprador)).subscribe({
      next: (response) => {
        this.comprador = response.message.usuario as Usuario;
      },
      error: async (error) => {
        this.toastService.showToastError("Erro ao buscar dados de comprador.");
      }
    });
  }

  private async getDataEndereco(){
    this.enderecoService.getDetalheEndereco(this.venda.enderecoCompraId).subscribe({
      next: (response) => {
        this.endereco = response.message;
      },
      error: async (error) => {
        this.toastService.showToastError("Erro ao buscar endereco de entrega");
      }
    });
  }

}
