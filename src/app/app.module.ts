import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { MatExpansionModule } from '@angular/material/expansion';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ErrorPageComponent } from './User/error-page/error-page.component';
import { BorrowPagesComponent } from './User/borrow-pages/borrow-pages.component';
// meterial
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';


// meterial
import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './User/forgot-password/forgot-password.component';
import { BooksByThemeComponent } from './User/books-by-theme/books-by-theme.component';
import { CreateEditBookModalComponent } from './admin/create-edit-book-modal/create-edit-book-modal.component';
import { CreateEditUserModalComponent } from './admin/create-edit-user-modal/create-edit-user-modal.component';


import { FormsModule } from '@angular/forms';
// huy le
import { DashboardPageComponent } from './admin/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [
    AppComponent,




    ErrorPageComponent,
    BorrowPagesComponent,
    ForgotPasswordComponent,
    BooksByThemeComponent,
    CreateEditBookModalComponent,
    CreateEditUserModalComponent,

    DashboardPageComponent



=======
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginPageComponent } from './User/login-page/login-page.component';
import { RegisterPageComponent } from './User/register-page/register-page.component';
import { ProfilePageComponent } from './User/profile-page/profile-page.component';
import { DashboardPageComponent } from './Admin/dashboard-page/dashboard-page.component';
import { UserListPageComponent } from './Admin/user-list-page/user-list-page.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { DetailsPageComponent } from './User/details-page/details-page.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { BackToTopComponent } from './layouts/back-to-top/back-to-top.component';
import { SearchResultComponent } from './User/search-result/search-result.component';

import { DarkModeComponent } from './layouts/dark-mode/dark-mode.component';

//translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateComponent } from './layouts/translate/translate.component';
import { LoadListBookComponent } from './Admin/load-list-book/load-list-book.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetailsPageComponent,
    BackToTopComponent,
    SearchResultComponent,
    DarkModeComponent,
    TranslateComponent,
    LoadListBookComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ProfilePageComponent,
    DashboardPageComponent,
    UserListPageComponent,
>>>>>>> 537d3e150332298d30f0fc6425f1fc8811590f48
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatExpansionModule,
<<<<<<< HEAD

    //  metarila
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatChipsModule,
    MatCardModule,
    MatListModule,
    //end metarila
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    EditorModule,

    FormsModule

=======
    MatSidenavModule,
    FormsModule,
    MatTableModule,
    AppRoutingModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatListModule,
    MatSortModule,
    MatCardModule,
    MatSelectModule,
    MatChipsModule,
    BrowserAnimationsModule,
    //translate
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
>>>>>>> 537d3e150332298d30f0fc6425f1fc8811590f48
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
//translate
export function httpTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http);
}
