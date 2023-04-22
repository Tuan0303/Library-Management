import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
