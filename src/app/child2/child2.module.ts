import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from './child2.component';
import { Child2RoutingModule } from './child2-routing.module';

@NgModule({
  declarations: [
    Child2Component
  ],
  imports: [
    CommonModule,
    Child2RoutingModule
  ]
})
export class Child2Module {}
