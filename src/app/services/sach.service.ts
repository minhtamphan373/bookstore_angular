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

  constructor(private http: HttpClient) { }

  public getSaches(): Observable<Sach[]> {

    return this.http.get<Sach[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getSach(sachID: string): Observable<Sach> {
    return this.http.get<Sach>(`${environment.apiUrl}/${this.url}/${sachID}`);
  }

  public updateSach(sach: Sach): Observable<Sach[]> {

    return this.http.put<Sach[]>(
      `${environment.apiUrl}/${this.url}/${sach.id}`, sach);
  }

  public createSach(sach: Sach): Observable<Sach[]> {
    const formData = new FormData();
    formData.append('id', sach.id.toString());
    formData.append('tenSach', sach.tenSach);
    formData.append('tacGia', sach.tacGia);
    formData.append('soTrang', sach.soTrang.toString());
    formData.append('hinhAnh', sach.hinhAnh);
    formData.append('tomTat', sach.tomTat);
    formData.append('pdfFile', sach.pdfFile);
    formData.append('idTheLoai', sach.idTheLoai.toString());    
    return this.http.post<Sach[]>(
      `${environment.apiUrl}/${this.url}`, formData);
  }

  public deleteSach(sach: Sach): Observable<Sach[]> {
    return this.http.delete<Sach[]>(`${environment.apiUrl}/${this.url}/${sach.id}`);
  }
  
  public getSachTheLoai(theLoaiID: string): Observable<Sach[]> {
    return this.http.get<Sach[]>(`${environment.apiUrl}/${this.url}/${theLoaiID}`);
  }
  
}