import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sach } from 'src/app/models/Sach';
import { SachService } from 'src/app/services/sach.service';
import { ActivatedRoute } from '@angular/router';
import { TheLoaiService } from 'src/app/services/theloai.service';
import { TheLoai } from 'src/app/models/TheLoai';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {  
  sachData: Sach|undefined
  theLoaiData: TheLoai|undefined
  theloaiList: TheLoai[]=[]
  categoryID:number
  constructor(private activeRoute: ActivatedRoute , private sachService: SachService , private theloaiService: TheLoaiService ) {}

  ngOnInit(): void {
    let sachId = this.activeRoute.snapshot.paramMap.get('sachId');
    console.warn(sachId);
    sachId && this.sachService.getSach(sachId).subscribe((result)=>{
      console.warn(result);
      this.sachData=result; 

      this.categoryID = result.idTheLoai;   
      console.warn(this.categoryID);
      this.categoryID && this.theloaiService.getTheLoai(this.categoryID.toString()).subscribe(theloai =>{
        this.theLoaiData=theloai;
        console.warn(this.theLoaiData);
      })      
    })
    
    this.theloaiService.TheLoaiList()
    .subscribe((result: TheLoai[]) => (this.theloaiList = result));
  }
  

}
