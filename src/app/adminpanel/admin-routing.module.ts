import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { StatisticalComponent } from './statistical/statistical.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CommentsComponent } from './comments/comments.component';
import { BookspdfComponent } from './bookspdf/bookspdf.component';
import { AuthGuard } from '../guards/auth.guard';
import { BookAddComponent } from './bookspdf/book-add/book-add.component';
import { BookEditComponent } from './bookspdf/book-edit/book-edit.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { CategoryAddComponent } from './categories/category-add/category-add.component';
const routes: Routes = [{
  path: 'adminpanel', component: AdminComponent, canActivate: [AuthGuard],
  children:[
    {path: 'statistical', component: StatisticalComponent},
    {path: 'bookspdf', component: BookspdfComponent},
    {path: 'categories', component: CategoriesComponent},   
    {path: 'accounts', component: AccountsComponent},
    {path: 'comments', component: CommentsComponent},
    {
      path: '',
      redirectTo: 'adminpanel',
      pathMatch: 'full',
    },
    {path: 'book-add', component: BookAddComponent},
    {path: 'book-edit', component: BookEditComponent},
    {path: 'category-add', component: CategoryAddComponent},
    {path: 'category-edit', component: CategoryEditComponent},

  ],
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
