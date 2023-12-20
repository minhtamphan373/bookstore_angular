import { Component, OnInit} from '@angular/core';
import { Sach } from 'src/app/models/Sach';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { SachService } from 'src/app/services/sach.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent  {
  panelOpenState = false;
  public users: any = [];
  public name: string = "";
  public role!: string;
  keyword: string
  sach: Sach[]
  
  constructor(
    private api: ApiService,
    private auth: AuthService, 
    private userStore: UserStoreService,
    private sachService: SachService,
    ){ }
  ngOnInit() {
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
  loggedIn(){
    this.auth.isLoggedIn();
 
  }
  logout(){
    this.auth.logout();
    this.name ='';
    this.role = '';
    window.location.reload();
  }

  searchSach(){
    this.sachService.searchSach(this.keyword)
    .subscribe((res:Sach[]) =>{
      this.sach = res;
    })
  }

}
