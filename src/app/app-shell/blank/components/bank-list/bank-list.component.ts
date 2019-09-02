import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {
  @Input() banklist:any;

  constructor() { }

  ngOnInit() {
  }

}
