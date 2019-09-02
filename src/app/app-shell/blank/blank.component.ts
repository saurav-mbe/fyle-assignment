import { Component, OnInit } from '@angular/core';
import {BankDataRepoService} from './../../services/bank-data-repo.service';

 
@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {
  displayData:any;
  selectedCity:string;
  searchTerm:string;
  page=1;
  pageSize=20;
  searchResultsLength$ :any;
  constructor(private bankRepo:BankDataRepoService) {
    this.displayData = bankRepo.getDisplayData();
    this.searchResultsLength$ = bankRepo.getSearchResultsLength();
   }

  onCitySelect(city) {
    this.selectedCity = city;
    this.bankRepo.getBankData(city);
  }

  onSearchTerm(term) {
    this.searchTerm = term;
    this.bankRepo.searchBankData(term);
  }

  onPageChange(number) {
    this.bankRepo.nextPage(number);
  }

  ngOnInit() {
  }

}
