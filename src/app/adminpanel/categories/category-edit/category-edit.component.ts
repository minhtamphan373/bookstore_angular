import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TheLoai } from 'src/app/models/TheLoai';
import { TheLoaiService } from 'src/app/services/theloai.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent {
  @Input() theloai: TheLoai;

  constructor(
    private theloaiService: TheLoaiService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar, 
  ){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const dataToEditJson = decodeURIComponent(params['theloai']);
      if (dataToEditJson) {
        this.theloai = JSON.parse(dataToEditJson);
      } else {
        this.theloai = new TheLoai();
      }
    });
  }

  updateTheLoai(data: TheLoai){
    this.theloaiService
    .updateTheLoai(this.theloai, this.theloai.id)
    .subscribe((res) => {
      //console.log(saches)
      this.snackBar.open('Cập nhật thể loại', 'Success', {
        duration: 2000,
      });
      this.router.navigate(['/adminpanel/categories']) 
    })
  }

}
