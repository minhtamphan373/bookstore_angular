import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sach } from 'src/app/models/Sach';
import { SachService } from 'src/app/services/sach.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TheLoaiService } from 'src/app/services/theloai.service';
import { TheLoai } from 'src/app/models/TheLoai';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/Comment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/User';
import { UserStoreService } from '../../services/user-store.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {  
  sachData: Sach|undefined
  theLoaiData: TheLoai|undefined
  theloaiList: TheLoai[]=[]
  comment: Comment[]=[]
  categoryID:number
  // public users: any[]
  users: User[]=[]
  cmt: Comment = new Comment()
  IDSach: number
  IDUser: number
  public name: string = ""
  public role!: string;
  constructor(
    private activeRoute: ActivatedRoute, 
    private sachService: SachService,  
    private theloaiService: TheLoaiService,
    private api: ApiService,
    private auth: AuthService,
    private cmtService: CommentService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private userStore: UserStoreService,
    ) {}

  ngOnInit(): void {

    this.IDSach = this.route.snapshot.params['sachId'];
    // this.IDUser = this.route.snapshot.params['userId'];

    let sachId = this.activeRoute.snapshot.paramMap.get('sachId');
    console.warn(sachId);
    sachId && this.sachService.getSach(sachId).subscribe((result)=>{
      console.warn(result);
      this.sachData=result; 

      this.categoryID = result.idTheLoai;   
      console.warn(this.categoryID);
      this.categoryID && this.theloaiService.getTheLoai(this.categoryID.toString()).subscribe(theloai =>{
        this.theLoaiData=theloai;
        console.warn(this.theLoaiData);
      })      
    });
    
    this.theloaiService.TheLoaiList()
    .subscribe((result: TheLoai[]) => (this.theloaiList = result));

    this.getAllComment();
  
  }
  
  downloadPdf(id: string): void {
    this.sachService.getPdf(id).subscribe(response => {
      let fileName = response.headers.get('content-disposition')?.split(';')[1].split('=')[1];
      let blob: Blob = response.body as Blob;
      let url = window.URL.createObjectURL(blob);

      let a = document.createElement('a');
      a.download = fileName ?? id;
      a.href = url;
      a.click();
    })
  }


  onPostData() {
    this.cmt.idSach = this.IDSach;
    this.cmt.idUser = this.IDUser;
   this.cmtService.createComment(this.cmt)
   .subscribe((res) =>{
    console.log('success', res);
    this.getAllComment();
   },
   )
  }



  getAllComment(){
    this.cmtService.getAllComments()
    .subscribe((res) =>{
      this.comment = res;
    });
  }
  
  getAllUsers(){
    this.api.getUsers()
    .subscribe((res) =>{
      this.users = res;
    });
  }

  getUser(idUser: number){
    this.api.getUser(idUser)
    .subscribe((res) => {
      this.users = res;
    })
  }
  // getComment(idSach:number){
  //   this.cmtService.getCmtBySachId(idSach)
  //   .subscribe((res) =>{
  //     this.cmt = res;
  //   });
  // }
  // getNameUser(idUser:number){
  //   if(idUser){
  //     this.api.getNameByUserId(idUser)
  //     .subscribe((res:User) =>{
  //       this.users = [res];
  //     })
  //   }
  // }

  // getNameUser(idUser: number) {
  //   if (idUser) {
  //     this.api.getNameByUserId(idUser).subscribe((res: User) => {
  //       this.users.push(res);
  //     });
  //   }
  // }


}
