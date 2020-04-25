import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { Services } from './services/services';
import { ExampleComponent } from './example/example.component';
import { AuthComponent } from './auth/auth.component';
import { ROUTES } from './app.router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    AuthComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
