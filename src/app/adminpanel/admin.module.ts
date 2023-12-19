import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
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
import { BookAddComponent } from './bookspdf/book-add/book-add.component';
import { BookEditComponent } from './bookspdf/book-edit/book-edit.component';
import { BookDeleteComponent } from './bookspdf/book-delete/book-delete.component';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { NgToastModule } from 'ng-angular-popup';
import { CategoryAddComponent } from './categories/category-add/category-add.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { CommentDeleteComponent } from './comments/comment-delete/comment-delete/comment-delete.component';
import { AccountDeleteComponent } from './accounts/account-delete/account-delete/account-delete.component';

@NgModule({
    declarations: [
        AdminComponent,
        SidebarAdminComponent,
        AccountsComponent,
        BookspdfComponent,
        CategoriesComponent,
        CommentsComponent,
        StatisticalComponent,    
        BookAddComponent,
        BookEditComponent,
        CategoryAddComponent,
        CategoryEditComponent,
        BookDeleteComponent,
        CommentDeleteComponent,
        AccountDeleteComponent,    
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
        NgToastModule,
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        NgxPaginationModule,
    ],
    providers: [
        ServerService,
        AuthService,
        SachService,
        TheLoaiService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        }
    ],
})
export class AdminModule { }
