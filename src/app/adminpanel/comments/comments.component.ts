import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment.service';
import { SachService } from 'src/app/services/sach.service';
import { CommentDeleteComponent } from './comment-delete/comment-delete/comment-delete.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
comments: Comment[] = [];
p: number = 1;
itemPerPage: number = 8;


constructor(
  private sachService: SachService,
  private cmtService: CommentService,
  private dialog: MatDialog,
  private snackBar: MatSnackBar,
  private router: Router,
){ }

ngOnInit() {
  this.cmtService.getAllComments()
  .subscribe( result => {
    this.comments = result;
  });

  // this.deleteComment(this.idCmt)
  }

  deleteComment(idCmt: number):void{
    const dialogRef = this.dialog.open(CommentDeleteComponent, {
      width: '50%',
      data: idCmt,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.cmtService.deleteComment(idCmt).subscribe(() => {
          this.snackBar.open('Sách đã được xóa', 'Success', {
            duration: 2000,
          });
        });
      }
    });
    // this.cmtService.deleteComment(idCmt)
    // .subscribe((res) =>{
    //   this.comments = res;
    // })
  }

}
