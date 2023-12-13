import { Component } from '@angular/core';
import { Sach } from 'src/app/models/Sach';
import { TheLoai } from 'src/app/models/TheLoai';
import { SachService } from 'src/app/services/sach.service';
import { TheLoaiService } from 'src/app/services/theloai.service';

@Component({
  selector: 'app-bookspdf',
  templateUrl: './bookspdf.component.html',
  styleUrls: ['./bookspdf.component.css']
})
export class BookspdfComponent {
  saches: Sach[] = [];
  sachToEdit?: Sach;
  theLoaiData: TheLoai|undefined

  constructor(private sachService: SachService, private theloaiService: TheLoaiService  ) {
  
  }

  ngOnInit(): void {
    this.sachService.getSaches()
    .subscribe((result: Sach[]) => (this.saches = result    ));
      this.sachService.getSaches().subscribe((result: Sach[])=>{
        console.warn(result);
        
        // this.categoryID = result.idTheLoai;   
        // console.warn(this.categoryID);
        // this.categoryID && this.theloaiService.getTheLoai(this.categoryID.toString()).subscribe(theloai =>{
        //   this.theLoaiData=theloai;
        //   console.warn(this.theLoaiData);
        // })      
      })
  }

  updateSachList(saches: Sach[]){
    this.saches = saches;
  }

  initNewSach(){
    this.sachToEdit = new Sach();
  }

  editSach(sach: Sach){
    this.sachToEdit = sach;
    // alert("Please select")
  }
}
