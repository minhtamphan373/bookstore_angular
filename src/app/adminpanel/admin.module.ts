import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin.component';
import { ServerService } from '../services/server.services';
import { AuthService } from '../services/auth.service';
import { SachService } from '../services/sach.service';
import { TheLoaiService } from '../services/theloai.service';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { AccountsComponent } from './accounts/accounts.component';
import { BookspdfComponent } from './bookspdf/bookspdf.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { StatisticalComponent } from './statistical/statistical.component';

@NgModule({
    declarations: [
        AdminComponent,
        SidebarAdminComponent,
        AccountsComponent,
        BookspdfComponent,
        CategoriesComponent,
        CommentsComponent,
        StatisticalComponent,        
    ],
    imports: [
        RouterModule,
        CommonModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        HttpClientModule,
    ],
    providers: [
        ServerService,
        AuthService,
        SachService,
        TheLoaiService,
    ],
})
export class AdminModule { }
