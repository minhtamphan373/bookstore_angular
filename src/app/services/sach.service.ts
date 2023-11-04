import { Injectable } from '@angular/core';
import { Sach } from '../models/Sach';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class SachService {

  private url = "Saches";
  constructor( private http: HttpClient){ }

  public getSaches(): Observable<Sach[]>{

    return this.http.get<Sach[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getSach(sach: Sach): Observable<Sach[]>{
    return this.http.get<Sach[]>(`${environment.apiUrl}/${this.url}/${sach.id}`);
  }
  
  public updateSach(sach: Sach): Observable<Sach[]>{

    return this.http.put<Sach[]>(
      `${environment.apiUrl}/${this.url}/${sach.id}`, sach);
  }

  public createSach(sach: Sach): Observable<Sach[]>{

    return this.http.post<Sach[]>(
      `${environment.apiUrl}/${this.url}`, sach);
  }

  public deleteSach(sach: Sach): Observable<Sach[]>{

    return this.http.delete<Sach[]>(`${environment.apiUrl}/${this.url}/${sach.id}`);
  }
}