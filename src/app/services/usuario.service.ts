import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroUsuario } from '../interfaces/cadastro-usuario';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  novoUsuario(cadastro: CadastroUsuario){
    return this.http.post(`${environment.api}/usuarios`, cadastro);
  }
}
