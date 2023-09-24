import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JogoService {
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    params: new HttpParams()
  };

  constructor(
    private http: HttpClient,
    private httpService: HttpService
  ) { }

  getJogo(query?: any): Observable<any>{
    const queryParams = this.httpService.convertToQueryParams(query);
    return this.http.get<any>(`${environment.api}/jogos?${queryParams}`);
  }
}
