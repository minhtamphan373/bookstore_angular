import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { StatisticalComponent } from './statistical/statistical.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CommentsComponent } from './comments/comments.component';
import { BookspdfComponent } from './bookspdf/bookspdf.component';
const routes: Routes = [{
  path: 'adminpanel', component: AdminComponent,
  children:[
    {path: 'statistical', component: StatisticalComponent},
    {path: 'bookspdf', component: BookspdfComponent},
    {path: 'categories', component: CategoriesComponent},   
    {path: 'accounts', component: AccountsComponent},
    {path: 'comments', component: CommentsComponent},
    {
      path: '',
      redirectTo: 'statistical',
      pathMatch: 'full',
    },
  ],
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
