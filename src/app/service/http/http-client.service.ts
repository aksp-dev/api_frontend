import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

    readonly default_params: any = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json',
        })
      };

    /**
     * get
     * 
     * @param url 
     * @param header 
     */
    public get<T>(url, params=this.default_params){
      return this.http.get<T>(url,params);
      
    }
  constructor(private http: HttpClient) { }
}

