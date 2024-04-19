import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Module } from './child1/child1.module';
import { Child2Module } from './child2/child2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Child1Module,
    Child2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
