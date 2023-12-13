import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AboutComponent } from './about/about.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { LibraryComponent } from './library/library.component';


const routes: Routes = [{
    path: '',component: PagesComponent,
    children:[
        {path: 'home', component: HomeComponent},
        {path: 'contact', component: ContactComponent},
        {path: 'login-user', component: LoginUserComponent},
        {path: 'register-user', component:RegisterUserComponent},
        {path: 'about', component: AboutComponent},
        {path: 'book-details', component: BookDetailsComponent},
        {path: 'library', component: LibraryComponent},
        {
            path: 'bookdetail/:sachId',
            component: BookDetailsComponent
          },
        {
          path: '',
          redirectTo: 'pages/home',
          pathMatch: 'full',
        },           
    ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
