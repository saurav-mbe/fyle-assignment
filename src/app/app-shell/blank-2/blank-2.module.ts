import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankComponent1 } from './blank.component';
import { Blank2RoutingModule } from './blank-2-routing.module';


@NgModule({
  declarations: [
    BlankComponent1,
  ],
  imports: [
    CommonModule,
    Blank2RoutingModule
  ]
})
export class Blank2Module { }
