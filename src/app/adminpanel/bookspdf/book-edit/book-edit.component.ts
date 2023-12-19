import { HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sach } from 'src/app/models/Sach';
import { SachService } from 'src/app/services/sach.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TheLoaiService } from 'src/app/services/theloai.service';
import { TheLoai } from 'src/app/models/TheLoai';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit{
  @Input() sach: Sach;
  @Output() sachesUpdated = new EventEmitter<Sach>();
  sachToEdit: Sach;
  file: any;
  saches :Sach[]=[]
  theloai: TheLoai[]=[]
  idSach: number;
  tenTheLoai: string;

  constructor(
    private sachService: SachService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar, 
    private theLoaiService: TheLoaiService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const editData = JSON.parse(params['editData']);
      this.sach = editData;      
    });
    
    
  }

  updateSach(sach: Sach){
    this.sachService
      .updateSach(this.sach, this.sach.id)
      .subscribe((saches: Sach) =>{
        this.snackBar.open('Cập nhật sách', 'Success', {
          duration: 2000,
        });  
      this.router.navigate(['/adminpanel/bookspdf'])    
    })
  }

}
