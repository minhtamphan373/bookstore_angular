import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TheLoai } from '../models/TheLoai';

@Injectable({
    providedIn: 'root'
})

export class TheLoaiService {

    private url = "TheLoais";

    constructor(private http: HttpClient) { }
    
    TheLoaiList() {
        return this.http.get<TheLoai[]>(`${environment.apiUrl}/${this.url}`);
    }
    
    addTheLoai(data: TheLoai) {
        const formData = new FormData();
        formData.append('tenTheLoai', data.tenTheLoai);
        return this.http.post<TheLoai>(`${environment.apiUrl}/${this.url}`, formData);
    }


    deleteTheLoai(id: number) {
        return this.http.delete(`${environment.apiUrl}/${this.url}/${id}`);
    }

    getTheLoai(id: string) {
        return this.http.get<TheLoai>(`${environment.apiUrl}/${this.url}/${id}`);
    }

    updateTheLoai(data: TheLoai, id: number) {
        return this.http.put<TheLoai>(
            `${environment.apiUrl}/${this.url}/${id}`,
            data
        );
    }

    getTotal() {
        return this.http.get<number>(`${environment.apiUrl}/${this.url}/totalTheLoais`);
    }


}
