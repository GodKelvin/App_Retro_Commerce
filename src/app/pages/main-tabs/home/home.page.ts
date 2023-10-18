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
  descricaoPrecos: string = "Esses são os preços de outros anúncios \
                            deste mesmo item, sendo o menor preço, o preço médio e o maior preço \
                            que este item está sendo comercializado na plataforma.";
  constructor(
    private anuncioService: AnuncioService,
    private loadingService: LoadingService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.getUltimosAnuncios();
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

  private async getUltimosAnuncios(){
    await this.loadingService.showLoading();
    this.anuncioService.getUltimosAnuncios().subscribe({
      next: (response) => {
        this.anuncios = response.message;
        this.loadingService.hideLoading();
      },
      error: async(error) => {
        this.toastService.showToastError("Erro ao obter últimos anúncios. Por favor, tente mais tarde.");
        this.loadingService.hideLoading();
      }
    })
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

}
