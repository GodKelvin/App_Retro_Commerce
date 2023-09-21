import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Login } from '../interfaces/login';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

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
    private http: HttpClient,
    private router: Router
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

  isTokenValido(token: string): boolean{
    if(!token) return false;

    //Obtem o timestamp atual em segundos
    const currentTimeStamp = Math.floor(Date.now() / 1000); 

    try{
      const decodedToken = this.helperJwt.decodeToken(token);
      if(decodedToken && decodedToken.exp < currentTimeStamp) return false;
      return true;

    }catch(error) {return false}
  }

  logout(): void{
    localStorage.removeItem("tokenLogin");
    this.router.navigate(["/login"]);
  }
}
