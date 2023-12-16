import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { StatisticalComponent } from './statistical/statistical.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CommentsComponent } from './comments/comments.component';
import { BookspdfComponent } from './bookspdf/bookspdf.component';
import { AuthGuard } from '../guards/auth.guard';
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
  ],
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
