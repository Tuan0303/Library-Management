import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ErrorPageComponent } from './User/error-page/error-page.component';
import { BooksByThemeComponent } from './User/books-by-theme/books-by-theme.component';
import { BorrowPagesComponent } from './User/borrow-pages/borrow-pages.component';
import { ForgotPasswordComponent } from './User/forgot-password/forgot-password.component';
import { CreateEditBookModalComponent } from './admin/create-edit-book-modal/create-edit-book-modal.component';
import { CreateEditUserModalComponent } from './admin/create-edit-user-modal/create-edit-user-modal.component';
import { DashboardPageComponent } from './admin/dashboard-page/dashboard-page.component';



const routes: Routes = [



  { path: 'user/bytheme', component: BooksByThemeComponent },
  { path: 'admin/borrow', component: BorrowPagesComponent },
  { path: 'forgotpage', component: ForgotPasswordComponent },
  { path: 'admin/add/books', component: CreateEditBookModalComponent },
  { path: 'admin/add/user', component: CreateEditUserModalComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
