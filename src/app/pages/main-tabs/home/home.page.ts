import { Component, OnInit } from '@angular/core';
import { Anuncio } from 'src/app/interfaces/anuncio';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  anuncios: Anuncio[] = [];
  constructor(
    private anuncioService: AnuncioService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.loadAnuncios();
  }

  async loadAnuncios(){
    this.loadingCtrl.create();
    this.anuncioService.getAnuncios({nada: "aqui"}).subscribe({
      next: (res) => {
        //this.anuncios.push(res)
        console.log(res);
      },
      error: (error) => {}

    });
  }

}
