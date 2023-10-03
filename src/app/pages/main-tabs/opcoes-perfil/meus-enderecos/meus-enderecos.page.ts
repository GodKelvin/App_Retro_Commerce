import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meus-enderecos',
  templateUrl: './meus-enderecos.page.html',
  styleUrls: ['./meus-enderecos.page.scss'],
})
export class MeusEnderecosPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  novoEndereco(){
    this.router.navigate(["/novo-endereco"])
  }

}
