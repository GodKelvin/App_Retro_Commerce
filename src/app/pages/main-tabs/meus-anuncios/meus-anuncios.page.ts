import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meus-anuncios',
  templateUrl: './meus-anuncios.page.html',
  styleUrls: ['./meus-anuncios.page.scss'],
})
export class MeusAnunciosPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  novoAnuncio(){
    this.router.navigate(["/novo-anuncio"]);
  }

}
