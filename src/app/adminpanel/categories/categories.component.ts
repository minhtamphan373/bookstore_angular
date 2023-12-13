import { Component } from '@angular/core';
import { TheLoai } from 'src/app/models/TheLoai';
import { TheLoaiService } from 'src/app/services/theloai.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  theloais: TheLoai[]=[]

  constructor (private theloaiService: TheLoaiService ){}
  
  ngOnInit(): void{
    this.theloaiService.TheLoaiList()
    .subscribe((result: TheLoai[]) => (this.theloais= result));
  }
  
}
