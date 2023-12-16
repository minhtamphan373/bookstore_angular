import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService  } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private url = "Users";
  private userPayload: any;

  constructor(private http: HttpClient, private router: Router)
  { 
    this.userPayload = this.decodeToken();
  }

  register(userObj: any){
    return this.http.post<any>(`${environment.apiUrl}/${this.url}/register`,userObj);
  }

  login(loginObj: any){
    return this.http.post<any>(`${environment.apiUrl}/${this.url}/login`,loginObj);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['home'])
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

  decodeToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token))
    return jwtHelper.decodeToken(token)
  }

  getNameFromToken(){
    if(this.userPayload)
      return this.userPayload.name;
  }

  getRoleFromToken(){
    if(this.userPayload)
      return this.userPayload.role;
  }
}
