import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './adminpanel/admin-routing.module';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: '', redirectTo: 'pages/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/home' },
    

  {
    path: 'adminpanel',
    loadChildren: () => import('./adminpanel/admin.module')
      .then(m => m.AdminModule),
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }