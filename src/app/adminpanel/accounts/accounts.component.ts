import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  public users: any = [];
  p: number = 1;
  itemPerPage: number = 8;
  constructor(
    private api: ApiService, 
    private auth: AuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    ){ }
  ngOnInit() {
      this.api.getUsers()
      .subscribe(result => {
        this.users = result;
      })
  }
  logout(){
    this.auth.logout();
  }
}
