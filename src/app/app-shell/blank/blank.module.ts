import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap'

import {BankDataRepoService} from './../../services/bank-data-repo.service'

import { BlankComponent } from './blank.component';
import { BlankRoutingModule } from './blank-routing.module';;
import { CitySelectComponent } from './components/city-select/city-select.component'
;
import { BankListComponent } from './components/bank-list/bank-list.component'
;
import { BankItemComponent } from './components/bank-item/bank-item.component'
;
import { SearchBoxComponent } from './components/search-box/search-box.component'

@NgModule({
  declarations: [
    BlankComponent,
    CitySelectComponent
,   
    BankListComponent
,
    BankItemComponent ,
    SearchBoxComponent ],
  imports: [
    CommonModule,
    BlankRoutingModule,
    NgbPaginationModule
  ],
  providers:[BankDataRepoService]
})
export class BlankModule { }
