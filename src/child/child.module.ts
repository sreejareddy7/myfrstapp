import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChildRoutingModule } from './child-routing.module';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    BrowserModule,
    ChildRoutingModule
  ],
  providers: [],
  bootstrap: [ChildComponent]
})
export class ChildModule { }
