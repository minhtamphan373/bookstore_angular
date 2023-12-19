import { Injectable } from '@angular/core';
import { Sach } from '../models/Sach';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
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

  public updateSach(sach: Sach,sachID: number): Observable<Sach> {

    return this.http.put<Sach>(
      `${environment.apiUrl}/${this.url}/${sachID}`, sach);
      
  }

  public createSach(sach: Sach): Observable<Sach> {    
    const formData = new FormData();
    //formData.append('id', sach.id.toString());
    formData.append('tenSach', sach.tenSach);
    formData.append('tacGia', sach.tacGia);
    formData.append('soTrang', sach.soTrang.toString());
    formData.append('hinhAnh', sach.hinhAnh);
    formData.append('tomTat', sach.tomTat);
    formData.append('pdfFile', sach.pdfFile);
    formData.append('idTheLoai', sach.idTheLoai.toString());    
    return this.http.post<Sach>(
      `${environment.apiUrl}/${this.url}`, formData);
  }

  public deleteSach(sachID: number): Observable<Sach> {
    return this.http.delete<Sach>(`${environment.apiUrl}/${this.url}/${sachID}`);
  }
  
  public getSachTheLoai(theLoaiID:number): Observable<Sach[]> {
    return this.http.get<Sach[]>(`${environment.apiUrl}/${this.url}/books-id-category/${theLoaiID}`);
  }

  public getTenTheLoaiTheoIdSach(idSach: number){
    return this.http.get<Sach[]>(`${environment.apiUrl}/${this.url}/${idSach}/ten-the-loai-sach`);
  }

  public getTotal(): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/${this.url}/totalSachs`);
  }
  
  public getPdf(id:string){
    return this.http.get(`${environment.apiUrl}/${this.url}/download-pdf/${id}`,
    {observe: 'response',responseType:'blob'})
  }  

 
}