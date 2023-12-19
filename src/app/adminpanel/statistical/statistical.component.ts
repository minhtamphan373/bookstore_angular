import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';
import { SachService } from 'src/app/services/sach.service';
import { TheLoaiService } from 'src/app/services/theloai.service';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.css']
})
export class StatisticalComponent implements OnInit{
  totalSach: number;
  totalTheLoai: number;
  totalAccount: number;
  totalComment: number;

  constructor(
    private sacheService: SachService,
    private theloaiService:TheLoaiService,
    private cmtService: CommentService,
    private authService: AuthService,
  ){}

  ngOnInit(): void {
    this.sacheService.getTotal().subscribe(res=>{
      //console.log('total:', res);
      this.totalSach = res;
    })

    this.theloaiService.getTotal().subscribe(res=>{
      //console.log('total:', res);
      this.totalTheLoai = res;
    })

    this.authService.getTotal().subscribe(res=>{
      this.totalAccount = res;
    })

    this.cmtService.getTotalCmt().subscribe(res => {
      this.totalComment = res;
    })
    
  }
}
