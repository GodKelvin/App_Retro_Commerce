import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  private urlApi = environment.api;
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    params: new HttpParams()
  };

  constructor(
    private http: HttpClient
  ) { }

  getDetalheAnuncio(id: string): Observable<any>{
    return this.http.get<any>(`${this.urlApi}/anuncios/${id}`);
  }

  getAllAnunciosUsuario():Observable<any>{
    return this.http.get<any>(`${environment.api}/anuncios/all/me`);
  }

  getAnuncios(query: any): Observable<any>{
    const queryParams = this.convertToQueryParams(query);
    return this.http.get<any>(`${environment.api}/anuncios?${queryParams}`, this.httpOptions);
  }

  criarAnuncio(anuncio: FormData){
    return this.http.post(`${environment.api}/anuncios`, anuncio);
  }

  getUltimosAnuncios(){
    return this.http.get<any>(`${environment.api}/anuncios/all/ultimos`);
  }

  private convertToQueryParams(query: any){
    let search = "";
    for(const key in query){
      search += `${key}=${query[key]}&`
    }
    return search;
  }
}
