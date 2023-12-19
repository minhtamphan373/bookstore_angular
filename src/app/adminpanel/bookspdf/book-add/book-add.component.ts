import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Sach } from 'src/app/models/Sach';
import { TheLoai } from 'src/app/models/TheLoai';
import { SachService } from 'src/app/services/sach.service';
import { TheLoaiService } from 'src/app/services/theloai.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit{
  @Input() sach: Sach;
  @Output() sachesUpdated = new EventEmitter<Sach>(); 
  file: any;
  theloai: TheLoai[]=[]

  constructor(
    private sachService: SachService,
    private snackBar: MatSnackBar,  
    private route: ActivatedRoute,
    private router: Router,
    private theLoaiService: TheLoaiService,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const sachToEditJson = decodeURIComponent(params['sach']);
      if (sachToEditJson) {
        this.sach = JSON.parse(sachToEditJson);
      } else {
        this.sach = new Sach();
      }
    });
    this.theLoaiService.TheLoaiList()
    .subscribe((data: any)=> {
      this.theloai = data;
    });
  
  }

  createSach(){
    this.sachService
    .createSach(this.sach)
    .subscribe((saches: Sach) => {
      //console.log(saches)
      this.snackBar.open('Sách đã được thêm', 'Success', {
        duration: 2000,
      });
      this.router.navigate(['/adminpanel/bookspdf']) 
    })    
  }

  selectFile(e: any) {
    this.sach.hinhAnh = e.target.files[0];
  }
  selectFilePdf(e: any) {
    this.sach.pdfFile = e.target.files[0];
  }
}
