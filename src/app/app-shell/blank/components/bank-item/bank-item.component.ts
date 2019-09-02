import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bank-item',
  templateUrl: './bank-item.component.html',
  styleUrls: ['./bank-item.component.css']
})
export class BankItemComponent implements OnInit {
  @Input() bankitem:any;
  constructor() { }

  ngOnInit() {
  }

}
