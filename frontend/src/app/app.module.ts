import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { AppBaseComponent } from './base/app-base/app-base.component';
import { ListPartialComponent } from './partials/list-partial/list-partial.component';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { VotePartialComponent } from './partials/vote-partial/vote-partial.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppBaseComponent,
    ListPartialComponent,
    AppPageComponent,
    VotePartialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
