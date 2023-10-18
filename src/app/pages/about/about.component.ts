import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  hide = true;
  tonghide(){
    this.hide=!this.hide;
  }
}
