import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Endereco } from '../interfaces/endereco';
@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private urlApi = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  novoEndereco(endereco: Endereco){
    return this.http.post(`${this.urlApi}/enderecos`, endereco);
  }

  getEnderecosUsuario(){
    return this.http.get<any>(`${this.urlApi}/enderecos`);
  }

  getDetalheEndereco(id: number){
    return this.http.get<any>(`${this.urlApi}/enderecos/compras/${id}`);
  }
}
