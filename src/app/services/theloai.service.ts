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

    addTheLoai(data: TheLoai) {
        return this.http.post<TheLoai>(`${environment.apiUrl}/${this.url}`, data);
    }

    TheLoaiList() {
        return this.http.get<TheLoai[]>(`${environment.apiUrl}/${this.url}`);
    }

    deleteTheLoai(id: number) {
        return this.http.delete(`${environment.apiUrl}/${this.url}/${id}`);
    }

    getTheLoai(id: string) {
        return this.http.get<TheLoai>(`${environment.apiUrl}/${this.url}/${id}`);
    }

    updateTheLoai(TheLoai: TheLoai) {
        return this.http.put<TheLoai>(
            `${environment.apiUrl}/${this.url}/${TheLoai.id}`,
            TheLoai
        );
    }
}
