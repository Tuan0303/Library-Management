import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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


import { FormsModule } from '@angular/forms';
import { BackToTopComponent } from './layouts/back-to-top/back-to-top.component';
import { SearchResultComponent } from './User/search-result/search-result.component';


import { ReactiveFormsModule } from '@angular/forms';
import { DarkModeComponent } from './layouts/dark-mode/dark-mode.component';

//translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateComponent } from './layouts/translate/translate.component';
import { LoadListBookComponent } from './Admin/load-list-book/load-list-book.component';


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
    UserListPageComponent
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
    //translate
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
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
