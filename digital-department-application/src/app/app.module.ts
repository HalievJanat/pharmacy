import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Page1Component } from './page1/page1.component';
import { Page3Component } from './page3/page3.component';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: Page1Component }
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
