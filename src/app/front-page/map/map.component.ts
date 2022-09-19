import { Component, Injectable, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper.service';

Injectable();
@Component({
  selector: 'map-app',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor(public help: HelperService) {}

  iconSpot = '../assets/pictures/picture1.png'; // icons for the markers
  iconFavorites = '../assets/pictures/picture2.png';

  lat = 51.678418; //basic coordinates for the big map
  lng = 7.809007;

  ngOnInit(): void {}

  addToFavorites(marker: any, index: number) { // this is the add to Favorites button inside the marker
    this.help.favouritesData.push(marker);
    this.help.spotsData.splice(index, 1);
    this.help.deleteSpots(marker).subscribe();
    this.help.pushFavourites(marker).subscribe();
  }
  removeFromFavorites(marker: any, index: number) {
    // this is the remove from Favorites button inside the marker
    this.help.spotsData.push(marker);
    this.help.favouritesData.splice(index, 1);
    this.help.pushSpots(marker).subscribe();
    this.help.deleteFavourites(marker).subscribe();
  }
}
