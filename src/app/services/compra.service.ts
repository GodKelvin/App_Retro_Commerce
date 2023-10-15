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
    return this.http.post<any>(`${this.urlApi}/compras`, dataCompra);
  }

  getAllCompras(){
    return this.http.get<any>(`${this.urlApi}/compras`);
  }

  getAllVendas(){
    return this.http.get<any>(`${this.urlApi}/compras/vendas`);
  }

  getDetalhesItemCompra(compraId: number){
    return this.http.get<any>(`${this.urlApi}/compras/${compraId}`);
  }

  getDetalhesItemVenda(compraId: number){
    return this.http.get<any>(`${this.urlApi}/compras/vendas/${compraId}`);
  }

  uploadComprovantePagamento(dataComprovante: FormData){
    return this.http.patch<any>(`${this.urlApi}/compras/upload-comprovante`, dataComprovante);
  }
}
