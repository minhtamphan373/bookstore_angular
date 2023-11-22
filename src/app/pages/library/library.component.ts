import { Component, Input, OnInit } from '@angular/core';
import { Sach } from 'src/app/models/Sach';
import { SachService } from 'src/app/services/sach.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent{
  saches: Sach[] = [];
  sachToEdit?: Sach;

  constructor(private sachService: SachService) {
  
  }

  ngOnInit(): void {
    this.sachService.getSaches()
    .subscribe((result: Sach[]) => (this.saches = result));
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
  // updateSach(sach: Sach){}
}

