﻿import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/blank', pathMatch: 'full' },
  {
    path: 'blank',
    loadChildren: () => import('./app-shell/blank/blank.module').then(mod => mod.BlankModule)
  },
  {
    path: 'blank-2',
    loadChildren: () => import('./app-shell/blank-2/blank-2.module').then(mod => mod.Blank2Module)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

