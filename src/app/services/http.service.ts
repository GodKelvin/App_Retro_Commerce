import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  public convertToQueryParams(query: any){
    let search = "";
    for(const key in query){
      search += `${key}=${query[key]}&`
    }
    return search;
  }
}
