import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anuncio } from 'src/app/interfaces/anuncio';
import { Usuario } from 'src/app/interfaces/usuario';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-detalhe-item',
  templateUrl: './detalhe-item.page.html',
  styleUrls: ['./detalhe-item.page.scss'],
})
export class DetalheItemPage implements OnInit {
  anuncio = {} as Anuncio;
  anunciante = {} as Usuario;

  constructor(
    private anuncioService: AnuncioService,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDetalheAnuncio();
  }

  private async getDetalheAnuncio(){
    const idAnuncio: string = String(this.route.snapshot.paramMap.get("id"));
    await this.loadingService.showLoading();
    this.anuncioService.getDetalheAnuncio(idAnuncio).subscribe({
      next: (response) => {
        this.anuncio = response.message;
        this.getAnunciante();
      },
      error: async (error) => {
        this.toastService.showToastError("Erro ao carregar anúncio.");
      }
    });
    this.loadingService.hideLoading();
  }

  comprar(){
    this.router.navigate(["/resumo-compra", {
        anuncio: JSON.stringify(this.anuncio), 
        anunciante: JSON.stringify(this.anunciante)
      }],
      //Oculta os dados da URL
      { skipLocationChange: true }
    );
  }

  formataData(data: string | undefined){  
    if(data){
      const date = new Date(data);
      const dia = String(date.getDate()).padStart(2, '0');
      const mes = String(date.getMonth() + 1).padStart(2, '0');
      const ano = date.getFullYear();
      return `${dia}/${mes}/${ano}`;
    }

    return null;
    
  }

  private async getAnunciante(){
    if(this.anuncio) this.usuarioService.getDetalhesUsuario(this.anuncio.anunciante).subscribe({
      next: (response) => {
        this.anunciante = response.message.usuario as Usuario;
      },
      error: async (error) => {
        this.toastService.showToastError("Erro ao buscar dados de anunciante.");
      }
    });
  }

}
