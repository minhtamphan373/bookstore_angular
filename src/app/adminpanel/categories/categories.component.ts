import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TheLoai } from 'src/app/models/TheLoai';
import { TheLoaiService } from 'src/app/services/theloai.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  theloais: TheLoai[]=[];
  data?: TheLoai;

  constructor (
    private theloaiService: TheLoaiService,
    private router: Router,
     ){}
  
  ngOnInit(): void{
    this.theloaiService.TheLoaiList()
    .subscribe((result: TheLoai[]) => (this.theloais= result));
  }

  initNewTheLoai(): void {
    this.data = new TheLoai();
    this.router.navigate(['/adminpanel/category-add'], { queryParams: { theloai: JSON.stringify(this.data) } });
  }

  editTheLoai(theLoai: TheLoai): void{
    this.data = theLoai;
    this.router.navigate(['/adminpanel/category-edit'], { queryParams: { theloai: JSON.stringify(this.data) } });
  }
  
  
}
