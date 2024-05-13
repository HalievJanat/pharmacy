import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: Page1Component },
<<<<<<< HEAD
  { path: 'page3', component: Page3Component}
=======
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component }
>>>>>>> 0a6b92af895dd73906c8f93496b60e2a22603e7c
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
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
