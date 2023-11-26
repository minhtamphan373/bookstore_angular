import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sach } from 'src/app/models/Sach';
import { SachService } from 'src/app/services/sach.service';

@Component({
  selector: 'app-edit-sach',
  templateUrl: './edit-sach.component.html',
  styleUrls: ['./edit-sach.component.css']
})
export class EditSachComponent implements OnInit {
  @Input() sach: Sach;
  @Output() sachesUpdated = new EventEmitter<Sach[]>();
  sachToEdit: Sach;
  file: any;

  constructor(
    private sachService: SachService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void { }

  updateSach(sach: Sach) {
    this.sachService
      .updateSach(sach)
      .subscribe((saches: Sach[]) => this.sachesUpdated.emit(saches));
  }

  deleteSach(sach: Sach) {
    this.sachService
      .deleteSach(sach)
      .subscribe((saches: Sach[]) => this.sachesUpdated.emit(saches));
  }

  createSach(sach: Sach) {
    this.sachService
      .createSach(sach)
      .subscribe((saches: Sach[]) => this.sachesUpdated.emit(saches));
  }

  // initNewSach() {
  //   this.sachToEdit = new Sach();
  // }

  selectFile(e: any) {
    this.sach.hinhAnh = e.target.files[0];
  }


}
