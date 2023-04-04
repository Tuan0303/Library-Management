import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { DetailsPageComponent } from './User/details-page/details-page.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ErrorPageComponent } from './User/error-page/error-page.component';
import { BorrowPagesComponent } from './User/borrow-pages/borrow-pages.component';
// meterial
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from '@angular/material/input';
import { ForgotPasswordComponent } from './User/forgot-password/forgot-password.component';
import { BooksByThemeComponent } from './User/books-by-theme/books-by-theme.component';
const MetarilaModuleDate = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatRippleModule,
  BrowserAnimationsModule,
  MatInputModule
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetailsPageComponent,
    ErrorPageComponent,
    BorrowPagesComponent,
    ForgotPasswordComponent,
    BooksByThemeComponent,


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
    ...MetarilaModuleDate,


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
