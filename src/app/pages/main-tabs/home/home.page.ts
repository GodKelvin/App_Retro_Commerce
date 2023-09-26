import { Component, OnInit } from '@angular/core';
import { Anuncio } from 'src/app/interfaces/anuncio';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { ToastService } from 'src/app/services/toast.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  anuncios: Anuncio[] = [];
  busca: String = "";
  constructor(
    private anuncioService: AnuncioService,
    private loadingService: LoadingService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.loadAnunciosIniciais();
  }

  async loadAnunciosIniciais(){
    this.searchAnuncios({dataInicio: this.getData()});
  }

  //@TODO: Paginar
  async buscar(){
    this.anuncios = [];
    this.searchAnuncios({jogo: this.busca});
  }

  private async searchAnuncios(query: any){
    await this.loadingService.showLoading();
    this.anuncioService.getAnuncios(query).subscribe({
      next: (res) => {
        this.loadingService.hideLoading();
        this.anuncios.push(...res.message);
      },
      error: (error) => {
        this.loadingService.hideLoading();
        this.toastService.showToastError("Erro ao obter anuncios");
      }
    });
  }

  private getData(){
    const data = new Date();
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  }

}
