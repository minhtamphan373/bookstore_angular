import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { LibraryComponent } from './pages/library/library.component';
import { EditSachComponent } from './components/edit-sach/edit-sach.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { ListSachComponent } from './pages/list-sach/list-sach.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {path: 'login-user', component: LoginUserComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'editsach', component: EditSachComponent},
  {path: 'bookdetail', component: BookDetailsComponent},
  {path: 'listsach', component: ListSachComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
