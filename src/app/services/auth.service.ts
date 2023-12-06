import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private url = "Users";

  constructor(private http: HttpClient){ }

  register(userObj: any){
    return this.http.post<any>(`${environment.apiUrl}/${this.url}/register`,userObj);
  }

  login(loginObj: any){
    return this.http.post<any>(`${environment.apiUrl}/${this.url}/login`,loginObj);
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token')
  }
}
