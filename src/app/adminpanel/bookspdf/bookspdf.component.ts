import { Component } from '@angular/core';
import { Sach } from 'src/app/models/Sach';
import { TheLoai } from 'src/app/models/TheLoai';
import { SachService } from 'src/app/services/sach.service';
import { TheLoaiService } from 'src/app/services/theloai.service';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { ActivatedRoute,Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-bookspdf',
  templateUrl: './bookspdf.component.html',
  styleUrls: ['./bookspdf.component.css']
})
export class BookspdfComponent {
  saches: Sach[] = [];
  sachToEdit?: Sach;
  theLoaiData: TheLoai|undefined;
  p: number = 1;
  itemPerPage: number = 4;
  totalBooks: any;
  theloai: any;

  constructor(
    private sachService: SachService, 
    private theloaiService: TheLoaiService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.sachService.getSaches()
    .subscribe((result: Sach[]) => {
      this.saches = result;
      this.totalBooks=this.saches.length; 
    });
    this.theloaiService.TheLoaiList()
    .subscribe((data: any)=> {
      this.theloai = data;
    });
  }

  updateSachList(saches: Sach[]){
    this.saches = saches;
  }

  initNewSach(){
    this.sachToEdit = new Sach();
    this.router.navigate(['/adminpanel/book-add'], { queryParams: { sach: JSON.stringify(this.sachToEdit) } });
  }

  editSach(sach: Sach){
    this.sachToEdit = sach;
    this.router.navigate(['/adminpanel/book-edit'], { queryParams: { editData: JSON.stringify(sach) } });
  }

  deleteSach(id: number): void{
    const dialogRef = this.dialog.open(BookDeleteComponent, {
      width: '50%',
      data: id,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.sachService.deleteSach(id).subscribe(() => {
          this.snackBar.open('Sách đã được xóa', 'Success', {
            duration: 2000,
          });
        });
      }
    });
  }

}
