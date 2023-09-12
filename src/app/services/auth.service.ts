import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Login } from '../interfaces/login';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private helperJwt = new JwtHelperService();
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  login(dadosLogin: Login): Observable<any>{
    return this.http.post<any>(`${environment.api}/login`, dadosLogin, this.httpOptions).pipe(
      tap((response) => {
        if(response.message.token){
          localStorage.setItem("tokenLogin", response.message.token);
        }
      })
    )
  }
}
