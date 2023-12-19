import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TheLoai } from 'src/app/models/TheLoai';
import { TheLoaiService } from 'src/app/services/theloai.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
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

  createTheLoai(){
    this.theloaiService
    .addTheLoai(this.theloai)
    .subscribe((res) => {
      //console.log(saches)
      this.snackBar.open('Thể loại đã được thêm', 'Success', {
        duration: 2000,
      });
      this.router.navigate(['/adminpanel/categories']) 
    })
  }

}
