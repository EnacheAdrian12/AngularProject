import { Component, Injectable } from '@angular/core';
import { HelperService } from 'src/app/helper.service';

Injectable();
@Component({
  selector: 'locations-app',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent {
  constructor(public help: HelperService) {}

  searchItem: string = ''; // this is the search tab and the variable that contains the search input

}
