import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getAnuncios(query: any){
    return this.http.get(`${environment.api}/anuncios`, query);
  }
}
