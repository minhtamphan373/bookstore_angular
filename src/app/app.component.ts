import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookstoreAngular';
  
  // showFooter: boolean = false;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
  //   const fullHeight = document.documentElement.offsetHeight || document.body.offsetHeight || 0;

  //   // Kiểm tra nếu người dùng cuộn tới cuối trang
  //   if (scrollPosition + windowHeight >= fullHeight) {
  //     this.showFooter = true;
  //   } else {
  //     this.showFooter = false;
  //   }
  // }
}
