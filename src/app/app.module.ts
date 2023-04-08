import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetailsPageComponent,
    BackToTopComponent,
    SearchResultComponent,
    DarkModeComponent,
    TranslateComponent
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
    FormsModule,
    AppRoutingModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
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
