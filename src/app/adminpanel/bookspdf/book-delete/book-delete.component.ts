import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<BookDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
