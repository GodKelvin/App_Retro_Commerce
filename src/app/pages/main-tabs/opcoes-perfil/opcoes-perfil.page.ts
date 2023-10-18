import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-opcoes-perfil',
  templateUrl: './opcoes-perfil.page.html',
  styleUrls: ['./opcoes-perfil.page.scss'],
})
export class OpcoesPerfilPage implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }

}
