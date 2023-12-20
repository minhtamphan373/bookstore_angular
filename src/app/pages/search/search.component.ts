import { Component } from '@angular/core';
import { Sach } from 'src/app/models/Sach';
import { SachService } from 'src/app/services/sach.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  keyword: string;
  sach: Sach[];


  constructor(
    private sachService: SachService,
  ){}

  ngOnInit(): void {
    
  }
  searchSach(){
    this.sachService.searchSach(this.keyword)
    .subscribe((res:Sach[]) =>{
      this.sach = res;
    })
  }
}
