import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  public users: any = [];
  constructor(private api: ApiService, private auth: AuthService){ }
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
