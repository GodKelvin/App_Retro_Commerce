import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anuncio } from 'src/app/interfaces/anuncio';
import { Endereco } from 'src/app/interfaces/endereco';
import { ResumoCompra } from 'src/app/interfaces/resumo-compra';
import { Usuario } from 'src/app/interfaces/usuario';
import { CompraService } from 'src/app/services/compra.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-detalhes-pedido',
  templateUrl: './detalhes-pedido.page.html',
  styleUrls: ['./detalhes-pedido.page.scss'],
})
export class DetalhesPedidoPage implements OnInit {
  pedido = {} as ResumoCompra;
  anuncio = {} as Anuncio;
  anunciante = {} as Usuario;
  endereco = {} as Endereco;
  comprovantePagamento: any;
  downloadPagamento: any;

  constructor(
    private route: ActivatedRoute,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private compraService: CompraService,
    private usuarioService: UsuarioService,
    private enderecoService: EnderecoService,
    private router: Router
  ) { 
    this.route.params.subscribe(params => {
      this.pedido = JSON.parse(params["pedido"]);
    });
  }

  async ngOnInit() {
    await this.loadingService.showLoading();
    this.getDataAnuncio();
    this.getAnunciante();
    this.getDataEndereco();
    this.loadingService.hideLoading();
  }

  private async getDataAnuncio(){
    this.compraService.getDetalhesItemCompra(this.pedido.id).subscribe({
      next: (response) => {
        this.anuncio = response.message;
      },
      error: async (error) => {
        this.toastService.showToastError("Erro ao obter detalhes do pedido.");
      }
    });
  }

  private async getAnunciante(){
    this.usuarioService.getDetalhesUsuario(this.pedido.anunciante).subscribe({
      next: (response) => {
        this.anunciante = response.message.usuario as Usuario;
      },
      error: async (error) => {
        this.toastService.showToastError("Erro ao buscar dados de anunciante.");
      }
    });
  }

  private async getDataEndereco(){
    this.enderecoService.getDetalheEndereco(this.pedido.enderecoCompraId).subscribe({
      next: (response) => {
        this.endereco = response.message;
      },
      error: async (error) => {
        this.toastService.showToastError("Erro ao buscar endereco de entrega");
      }
    });
  }

  customGoBack() {
    this.router.navigate(['/main-tabs/opcoes-perfil/meus-pedidos']);
  }

  async uploadComprovante(event: any){
    const file = event.target;
    if(file.files.length > 0){
      this.comprovantePagamento = file.files[0];
      const dadosForm = await this.convertForm();
      console.log(dadosForm);
      await this.loadingService.showLoading();
      this.compraService.uploadComprovantePagamento(dadosForm).subscribe({
        next: (response) => {
          console.log(response);
          this.toastService.showToastSuccess("Comprovante de pagamento enviado com sucesso");
          this.loadingService.hideLoading();
        },
        error: async(_erro) => {
          this.toastService.showToastError("Falha ao enviar comprovante de pagamento.");
          this.loadingService.hideLoading();
        }
      });
    }
  }

  private async convertForm(){
    const formData = new FormData();
    console.log(this.pedido);
    formData.append("compraId", this.pedido.id.toString());
    formData.append("comprovante-pagamento", this.comprovantePagamento);

    return formData;
  }
}
