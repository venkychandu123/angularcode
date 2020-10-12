import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(public httpref:HttpClient) { }

  getdatafromser():Observable<any> {
   return this.httpref.get<any>("https://jsonplaceholder.typicode.com/posts");
  }
}
