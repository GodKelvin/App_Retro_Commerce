import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anuncio } from 'src/app/interfaces/anuncio';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-meus-anuncios',
  templateUrl: './meus-anuncios.page.html',
  styleUrls: ['./meus-anuncios.page.scss'],
})
export class MeusAnunciosPage implements OnInit {
  meusItens: Anuncio[] = [];
  constructor(
    private router: Router,
    private anuncioService: AnuncioService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.getMeusAnuncios();
  }

  novoAnuncio(){
    this.router.navigate(["/novo-anuncio"]);
  }

  getMeusAnuncios(event?: any){
    this.anuncioService.getAllAnunciosUsuario().subscribe({
      next: (response) => {
        this.meusItens = response.message;
      },
      error: async (error) => {
        this.toastService.showToastError("Erro ao obter seus itens. Por favor, tente mais tarde.");
      }
    });

    if(event) event.target.complete();
  }

}
