import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Sach } from 'src/app/models/Sach';
import { TheLoai } from 'src/app/models/TheLoai';
import { SachService } from 'src/app/services/sach.service';
import { TheLoaiService } from 'src/app/services/theloai.service';

@Component({
  selector: 'app-lib-by-category',
  templateUrl: './lib-by-category.component.html',
  styleUrls: ['./lib-by-category.component.css']
})
export class LibByCategoryComponent {
  @Input() id: number;
  saches: Sach[] = [];
  theloais: TheLoai[] = [];
  data: number;
  p: number = 1;
  itemPerPage: number = 12;
  totalBooks : any;

  constructor(
    private sachService: SachService,
    private theloaiService: TheLoaiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.sachService.getSachTheLoai(this.id).subscribe((res: Sach[]) => {
        this.saches = res;
        console.log(res);
      })
    });

    this.theloaiService.TheLoaiList()
      .subscribe((result: TheLoai[]) => (this.theloais = result));
  }

  getSachByCategory(id: number){
    this.data=id;
    this.router.navigate(['/pages/lib-by-category'], {queryParams: {id: JSON.stringify(this.data)}});
  }

}
