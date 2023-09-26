import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    params: new HttpParams()
  };

  constructor(
    private http: HttpClient
  ) { }

  getAnuncios(query: any): Observable<any>{
    const queryParams = this.convertToQueryParams(query);
    return this.http.get<any>(`${environment.api}/anuncios?${queryParams}`, this.httpOptions);
  }

  criarAnuncio(anuncio: FormData){
    return this.http.post(`${environment.api}/anuncios`, anuncio);
  }

  private convertToQueryParams(query: any){
    let search = "";
    for(const key in query){
      search += `${key}=${query[key]}&`
    }
    return search;
  }
}
