import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroUsuario } from '../interfaces/cadastro-usuario';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlApi = environment.api;
  constructor(
    private http: HttpClient
  ) { }

  novoUsuario(cadastro: CadastroUsuario){
    return this.http.post(`${this.urlApi}/usuarios`, cadastro);
  }

  getDetalhesUsuario(apelido: string){
    return this.http.get<any>(`${this.urlApi}/usuarios/${apelido}`);
  }
}
