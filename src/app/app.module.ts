import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightComponent } from './rightchild/rightchild.component';
import { LeftComponent } from './leftchild/leftchild.component';

@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    LeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
