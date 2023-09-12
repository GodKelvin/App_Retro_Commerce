import { Component, OnInit } from '@angular/core';
import { CadastroUsuario } from 'src/app/interfaces/cadastro-usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  usuario: CadastroUsuario = {
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    apelido: "",
    dataNascimento: new Date()
    
  };
  constructor() { }

  ngOnInit() {
  }

  criarUsuario(){
    console.log(this.usuario)
  }

}
