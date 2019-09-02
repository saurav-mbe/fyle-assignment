import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlankComponent1 } from './blank.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent1
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Blank2RoutingModule { }
