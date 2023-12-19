import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "Users";

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(`${environment.apiUrl}/${this.url}`);
  }

  getUser(idUser: number){
    return this.http.get<User[]>(`${environment.apiUrl}/${this.url}/${idUser}`);
  }

  getNameByUserId(idUser:number){
    return this.http.get<User[]>(`${environment.apiUrl}/${this.url}/${idUser}/username`);
  }
}
