import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sach } from 'src/app/models/Sach';
import { TheLoai } from 'src/app/models/TheLoai';
import { SachService } from 'src/app/services/sach.service';
import { TheLoaiService } from 'src/app/services/theloai.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent{
  saches: Sach[] = [];
  sachToEdit: Sach;
  theloais: TheLoai[]=[];
  data: number;
  p: number = 1;
  itemPerPage: number = 12;
  totalBooks : any;

  constructor(
    private sachService: SachService,
    private theloaiService: TheLoaiService,
    private router: Router,
    ){ }

  ngOnInit(): void {
    // this.sachService.getSaches()
    //   .subscribe((result: Sach[]) => (this.saches = result));

    this.sachService.getSaches()
    .subscribe((result: Sach[]) => {
      this.saches = result
      this.totalBooks = this.saches.length;
    });

  this.theloaiService.TheLoaiList()
  .subscribe((result: TheLoai[]) => (this.theloais = result));

}
  
  getSachByCategory(id: number){
    this.data=id;
    this.router.navigate(['/pages/lib-by-category'], {queryParams: {id: JSON.stringify(this.data)}});
  }
  // updateSachesList(saches: Sach[]){
  //   this.saches = saches;
  // }

  // initNewSach(){
  //   this.sachToEdit = new Sach();
  // }

  // editSach(sach: Sach){
  //   this.sachToEdit = sach;
  //   // alert("Please select")
  // }



}

