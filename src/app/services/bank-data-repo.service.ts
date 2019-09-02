import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

import {search} from './../utils';


interface BankInfo {
  address:string;
  bank_id:number;
  bank_name:string;
  branch:string;
  city:string;
  district:string;
  ifsc:string;
  state:string;
}

@Injectable({
  providedIn: 'root'
})
export class BankDataRepoService {
  bankData : BankInfo[];
  searchResults = [];
  searchResultsLength$ = new BehaviorSubject(0);
  displayData$ : BehaviorSubject<BankInfo[]> = new BehaviorSubject<BankInfo[]>([]);
  constructor(private http:HttpClient) { }
  getBankData(city:string) {
    this.http.get('https://vast-shore-74260.herokuapp.com/banks?city='+city).subscribe((res:any)=>{
      this.bankData = res;
      this.searchResults = res;
      this.searchResultsLength$.next(res.length);
      this.displayData$.next(res.slice(0,20));
    });
  }

  searchBankData(term) {
    let result = this.bankData.slice(0,20);
    if(term.length>0){
      this.searchResults = search(this.bankData,term);
      this.searchResultsLength$.next(this.searchResults.length);
      result = this.searchResults.slice(0,20);
    }
    else{
      this.searchResultsLength$.next(this.bankData.length);
    }
    this.displayData$.next(result);
  }

  getSearchResultsLength () {
    return this.searchResultsLength$.asObservable();
  }

  nextPage(pageNum) {
    this.displayData$.next(this.searchResults.slice((pageNum-1)*20,(pageNum-1)*20+20));
  }

  getDisplayData() {
    return this.displayData$.asObservable();
  }

}
