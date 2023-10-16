import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private urlApi = environment.api;
  constructor(
    private http: HttpClient
  ) { }

  getAllVendas(){
    return this.http.get<any>(`${this.urlApi}/vendas`);
  }

  getDetalhesItemVenda(vendaId: number){
    return this.http.get<any>(`${this.urlApi}/vendas/${vendaId}`);
  }

  aceitarComprovantePagamento(vendaId: number){
    return this.http.patch<any>(`${this.urlApi}/vendas/aceitar-comprovante`, {vendaId});
  }

  recusarComprovantePagamento(vendaId: number){
    return this.http.patch<any>(`${this.urlApi}/vendas/recusar-comprovante`, {vendaId});
  }
}
