import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-pages',
  //templateUrl: './pages.component.html',
  template:`
    <app-navbar></app-navbar>

        <router-outlet></router-outlet>

    <app-footer></app-footer>


    
  `,
})
export class PagesComponent {
  title = 'Bookmarks';
  
//   showFooter: boolean = false;

//   @HostListener('window:scroll', [])
//   onWindowScroll() {
//     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//     const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
//     const fullHeight = document.documentElement.offsetHeight || document.body.offsetHeight || 0;

//     // Kiểm tra nếu người dùng cuộn tới cuối trang
//     if (scrollPosition + windowHeight >= fullHeight) {
//       this.showFooter = true;
//     } else {
//       this.showFooter = false;
//     }
//   }

}

