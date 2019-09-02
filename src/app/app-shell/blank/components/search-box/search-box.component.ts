import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() searchInput: string;
  @Output() inputChange = new EventEmitter();

  onInputChange($event) {
    this.inputChange.emit($event.target.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
