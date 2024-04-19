import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1.component';
import { Child1RoutingModule } from './child1-routing.module';

@NgModule({
  declarations: [
    Child1Component
  ],
  imports: [
    CommonModule,
    Child1RoutingModule
  ]
})
export class Child1Module {}
