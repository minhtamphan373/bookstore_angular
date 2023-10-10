import { Component } from '@angular/core';
import { SlideInterface } from './layouts/imageSlider/types/slide.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookstoreAngular';
  slides: SlideInterface[] = [
    { url: '../assets/image/slide1.png', title: 'beach' },
    { url: '../assets/image/slide7.jpg', title: 'boat' },
    { url: '../assets/image/slide3.jpg', title: 'forest' },
    { url: '../assets/image/slider4.jpg', title: 'city' },
    { url: '../assets/image/slide6.jpg', title: 'italy' },
  ];
}
