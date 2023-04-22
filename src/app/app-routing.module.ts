import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DetailsPageComponent } from './User/details-page/details-page.component';

import { ErrorPageComponent } from './User/error-page/error-page.component';
import { BooksByThemeComponent } from './User/books-by-theme/books-by-theme.component';
import { BorrowPagesComponent } from './User/borrow-pages/borrow-pages.component';
import { ForgotPasswordComponent } from './User/forgot-password/forgot-password.component';
import { CreateEditBookModalComponent } from './admin/create-edit-book-modal/create-edit-book-modal.component';
import { CreateEditUserModalComponent } from './admin/create-edit-user-modal/create-edit-user-modal.component';

import { SearchResultComponent } from './User/search-result/search-result.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'details', component: DetailsPageComponent },

  { path: 'book-by-theme', component: BooksByThemeComponent },
  { path: 'borrow-page', component: BorrowPagesComponent },
  { path: 'forgot-page', component: ForgotPasswordComponent },
  { path: 'edit-create-book-modal', component: CreateEditBookModalComponent },
  { path: 'edit-create-user-modal', component: CreateEditUserModalComponent },
  // { path: '', component: ErrorPageComponent }

  { path: 'search-result', component: SearchResultComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
