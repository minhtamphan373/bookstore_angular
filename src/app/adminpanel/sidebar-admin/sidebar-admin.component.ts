import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent {
  public users: any = [];
  public name: string = "";
  public role!: string;
  constructor(private api: ApiService, private auth: AuthService, private userStore: UserStoreService){ }
  ngOnInit() {
      this.api.getUsers()
      .subscribe(result => {
        this.users = result;
      });

      this.userStore.getNameFromStore()
      .subscribe(value => {
        const nameFromToken = this.auth.getNameFromToken();
        this.name = value || nameFromToken
      });

      this.userStore.getRoleFromStore()
      .subscribe(value => {
        const roleFromToken = this.auth.getRoleFromToken();
        this.role = value || roleFromToken
      })
  }
  logout(){
    this.auth.logout();
  }
}
