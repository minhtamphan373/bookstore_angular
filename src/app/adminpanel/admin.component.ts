import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
