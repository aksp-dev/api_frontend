import { Injectable } from '@angular/core';

import { HttpClientService } from '../http/http-client.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  public getMember(merchantId: string, memberId: string, url: string): Observable<any> {

    if(memberId){
      return this.httpService.get(url+merchantId+'/'+memberId);
    }
    return this.httpService.get(url+merchantId);
  }
  constructor(private httpService: HttpClientService) { }
}
