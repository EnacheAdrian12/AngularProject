import { Component, Injectable, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper.service';
import {
  MatDialog,
  MatDialogRef
  
} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

Injectable();
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public help: HelperService, public dialog: MatDialog) {}
  ngOnInit(): void {}

  ShowLogout: boolean = false;
  logOut() {
    this.ShowLogout = !this.ShowLogout;
  } // this is the logout button show or hide

  logOutFunction() {
    this.help.statusGetter = false;
  } // this is the logout button functionality

  addASpot(): void {
    this.help.addClicked = true;
    const dialogRef = this.dialog.open(NavBarAddSpotComponent, {
      width: '350px',
    }); // this is the popup button that send the to addSpot form

    dialogRef.afterClosed().subscribe(() => (this.help.addClicked = false)); // when the Close button is clicked that form hides
  }
}

@Component({
  selector: 'nav-bar-addSpot',
  templateUrl: './nav-bar-addSpot.component.html',
  styleUrls: ['./nav-bar-addSpot.component.css'],
})
export class NavBarAddSpotComponent {
  constructor(
    public help: HelperService,
    public dialogRef: MatDialogRef<NavBarAddSpotComponent>
  ) {}
  months = [
    'January',
    'February',
    ' March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    ' December',
  ]; // here are all months of the year
  coordsLat = 51.678418; // these are coordinates for the form
  coordsLng = 7.809007;
  lat = 51.678418; // these are coordinates for the start map
  lng = 7.809007;
  spotShow = true; // this is for you to show the text above the map
  buttonDisable = false; // this is for the "Confirm" button that needs all the information and then to confirm
  InputValidation = true;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  }); // this is the data form that gets the data when the spot is set
  inputSpotAdder = new FormGroup({
    name: new FormControl(''),
    country: new FormControl(''),
  }); // this is the form data that gets the name and the country

  getActualLocation(loc: any) {
    this.spotShow = false;
    this.coordsLat = loc.coords.lat;
    this.coordsLng = loc.coords.lng;
  } // this transforms the coordinates where you want to place the marker on the map.
  addSpot() {
    const randomProbability = Math.floor(Math.random() * 30) + 20; // this gets the wind  probability number
    const monthValue: any = this.range.value.end?.getMonth(); // this gets the month from the data form
    this.buttonDisable = true;
    const valuesAddSpot = {
      country: this.inputSpotAdder.value.country,
      lat: this.coordsLat,
      long: this.coordsLng,
      month: this.months[monthValue],
      name: this.inputSpotAdder.value.name,
      probability: randomProbability,
    }; // this is the actual data that is added to the API and application
    if (
      monthValue != 0 &&
      this.inputSpotAdder.value.country &&
      this.months[monthValue] &&
      this.inputSpotAdder.value.name
    ) {
      // if all the data is correct then we can push it to the API
      this.help.pushSpots(valuesAddSpot).subscribe(); // this is Pushed to the API
      this.help.spotsData.push(valuesAddSpot); // this is ADDED to spots for instance view
      this.help.allDataShow.push(valuesAddSpot); // this is added to locations as well
      this.dialogRef.close(); // then we close the addSpot
    } else {
      this.buttonDisable = false;
      this.InputValidation = false; // if not the validation is not ok and you cannot push the button
    }
  }
  closeAddSpot() {
    this.dialogRef.close(); // the close button
  }
}
