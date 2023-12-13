import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ServerService } from '../services/server.services';
import { LibraryComponent } from './library/library.component';
import { SachService } from '../services/sach.service';
import { TheLoaiService } from '../services/theloai.service';
import { AuthService } from '../services/auth.service';
import { EditSachComponent } from '../components/edit-sach/edit-sach.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from '../layouts/navbar/navbar.component';
import { FooterComponent } from '../layouts/footer/footer.component';
import { ImageSliderComponent } from './home/imageSlider/components/imageSlider.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    FontAwesomeModule,
    MatGridListModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    RouterModule,
    HttpClientModule,
    MatMenuModule,

  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginUserComponent,
    RegisterUserComponent,
    NavbarComponent,
    FooterComponent,
    ImageSliderComponent,
    LibraryComponent,
    EditSachComponent,
    BookDetailsComponent,
  ],
  providers: [
    ServerService,
    SachService,
    TheLoaiService,
    AuthService,
  ],
})
export class PagesModule {
}