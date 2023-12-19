import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { Comment } from '../models/Comment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = "Comments";

  constructor(private http: HttpClient) { }

  getAllComments(){
    return this.http.get<Comment[]>(`${environment.apiUrl}/${this.url}`);
  }

  getComment(id: number){
    return this.http.get<Comment[]>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  createComment(cmt: Comment){
    return this.http.post<Comment[]>(`${environment.apiUrl}/${this.url}`, cmt);
  }

  updateComment(cmt: Comment, id: number){
    return this.http.put<Comment[]>(`${environment.apiUrl}/${this.url}/${id}`, cmt);
  }

  public deleteComment(id: number):Observable<Comment>{
    return this.http.delete<Comment>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  getTotalCmt(){
    return this.http.get<number>(`${environment.apiUrl}/${this.url}/totalCmts`);
  }

  getCmtBySachId(idSach: number){
    return this.http.get<Comment[]>(`${environment.apiUrl}/${this.url}/api/Saches/${idSach}/Comments`);
  }

  getCmtByUserId(idUser: number){
    return this.http.get<Comment[]>(`${environment.apiUrl}/${this.url}/api/Users/${idUser}/Comments`);
  }
}
