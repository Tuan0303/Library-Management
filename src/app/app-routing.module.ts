import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
