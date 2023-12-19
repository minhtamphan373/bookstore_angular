import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-comment-delete',
  templateUrl: './comment-delete.component.html',
  styleUrls: ['./comment-delete.component.css']
})
export class CommentDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<CommentDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}
}
