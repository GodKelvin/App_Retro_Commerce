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
  constructor(
    private anuncioService: AnuncioService,
    private loadingService: LoadingService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.loadAnuncios();
  }

  async loadAnuncios(){
    await this.loadingService.showLoading();
    this.anuncioService.getAnuncios({nada: "aqui"}).subscribe({
      next: (res) => {
        this.loadingService.hideLoading();
        this.anuncios.push(...res.message);
        console.log(this.anuncios);
      },
      error: (error) => {
        //this.loadingService.hideLoading();
        this.toastService.showToastError("Erro ao obter anuncios");
      }

    });
  }

}
