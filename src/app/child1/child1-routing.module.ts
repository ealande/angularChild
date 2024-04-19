import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { Child1Component } from './child1.component';

const routes: Routes = [
  { path: 'child1', component: Child1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Child1RoutingModule {}
