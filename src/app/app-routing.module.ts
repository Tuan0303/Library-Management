import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD


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
=======
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DetailsPageComponent } from './User/details-page/details-page.component';
import { SearchResultComponent } from './User/search-result/search-result.component';
import { LoadListBookComponent } from './Admin/load-list-book/load-list-book.component';
import { LoginPageComponent } from './User/login-page/login-page.component';
import { RegisterPageComponent } from './User/register-page/register-page.component';
import { DashboardPageComponent } from './Admin/dashboard-page/dashboard-page.component';
import { ProfilePageComponent } from './User/profile-page/profile-page.component';
import { UserListPageComponent } from './Admin/user-list-page/user-list-page.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'details', component: DetailsPageComponent },
  { path: 'search-result', component: SearchResultComponent },
  // { path: 'list-book-admin', component: LoadListBookComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  // { path: 'listuser', component: UserListPageComponent },


  { path: 'admin', component: DashboardPageComponent },
  { path: 'admin/users', component: UserListPageComponent },
  { path: 'admin/books', component: LoadListBookComponent },
<<<<<<< HEAD
>>>>>>> 537d3e150332298d30f0fc6425f1fc8811590f48
=======
>>>>>>> 537d3e150332298d30f0fc6425f1fc8811590f48
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
