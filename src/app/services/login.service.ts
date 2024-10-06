import { User } from '../interfaces/user';
import {  inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseAccess } from '../interfaces/responceAccess';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { appSettings } from '../settings/appSettings';
import { ResponseRegister } from '../interfaces/responceRegister';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient);
  private baseUrl = appSettings.apiUrl


  constructor() { }




  createAcount(user: User) : Observable<ResponseRegister>{
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    console.log(body)
    return this.http.post<ResponseRegister>(`${this.baseUrl}/auth/register`,body, { headers })
  }


  login(login: Login) : Observable<ResponseAccess>{
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(login);
    console.log(body)
    return this.http.post<ResponseAccess>(`${this.baseUrl}/auth/login`,body, { headers })
  }




}
