import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'child1',
    loadChildren: () => import('./child1/child1.module').then(m => m.Child1Module)
  },
  {
    path: 'child2',
    loadChildren: () => import('./child2/child2.module').then(m => m.Child2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
