import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {ImageSliderModule } from './layouts/imageSlider/imageSlider.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatGridListModule} from '@angular/material/grid-list';
import { Validator } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatChipsModule} from '@angular/material/chips';
import { ServerService } from './services/server.services';
import { LibraryComponent } from './pages/library/library.component';
import { SachService } from './services/sach.service';
import { HttpClientModule } from '@angular/common/http';
import { EditSachComponent } from './components/edit-sach/edit-sach.component';
import { MatMenuModule} from '@angular/material/menu';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { ListSachComponent } from './pages/list-sach/list-sach.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginUserComponent,
    RegisterUserComponent,
    AboutComponent,
    ContactComponent,
    LibraryComponent,
    EditSachComponent,
    BookDetailsComponent,
    ListSachComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    ImageSliderModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule, 
    MatCheckboxModule,
    MatListModule,
    FontAwesomeModule,
    MatGridListModule,
    ReactiveFormsModule,
    RouterModule,
    MatChipsModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
  ],
  providers: [
    ServerService,
    SachService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
