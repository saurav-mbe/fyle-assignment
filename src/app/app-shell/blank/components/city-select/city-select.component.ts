import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.css']
})
export class CitySelectComponent implements OnInit {
  cityList = ['DELHI','MUMBAI','KOLKATA','BANGALORE','PUNE'];
  @Input() selectedCity:string;
  @Output() city =new EventEmitter();
  constructor() { }

  onCitySelect(city) {
    this.city.emit(city);
  }

  ngOnInit() {
  }

}
