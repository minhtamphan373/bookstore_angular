import { Component } from '@angular/core';
import { SlideInterface } from './layouts/imageSlider/types/slide.interface';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
@Component({
  selector: 'app-root',
  template: `
    <!--navbar -->
    <app-navbar></app-navbar>


    <!-- router -->
    <router-outlet></router-outlet>


    <!-- footer -->
    <app-footer></app-footer>
  `,
  // template: '<router-outlet></router-outlet>',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookstoreAngular';
  // slides: SlideInterface[] = [
  //   { url: '../assets/image/slide1.png'},
  //   { url: '../assets/image/slide7.jpg'},
  //   { url: '../assets/image/slide3.jpg'},
  //   { url: '../assets/image/slider4.jpg'},
  //   { url: '../assets/image/slide6.jpg'},
  // ];
  
}
