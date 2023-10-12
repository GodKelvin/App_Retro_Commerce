import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RealizaCompra } from '../interfaces/realiza-compra';
@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private urlApi = environment.api;
  constructor(
    private http: HttpClient
  ) { }

  realizaCompra(dataCompra: RealizaCompra){
    return this.http.post(`${this.urlApi}/compras`, dataCompra);
  }

  getAllCompras(){
    return this.http.get<any>(`${this.urlApi}/compras`);
  }
}
