import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Anuncio } from '../interfaces/anuncio';

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
    this.httpOptions.params.set("dataInicio", "2023-09-18")
    return this.http.get<any>(`${environment.api}/anuncios`, this.httpOptions);
  }
}
