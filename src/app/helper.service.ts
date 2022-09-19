import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormControl, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class HelperService implements OnInit {
  constructor(private http: HttpClient) {
    this.http
      .get('https://63122faa19eb631f9d81c71f.mockapi.io/login') // take the login data from API
      .subscribe((data) => (this.loginData = data)); 

      
    this.http
      .get('https://63122faa19eb631f9d81c71f.mockapi.io/spot') // take the spots data from API
      .subscribe((data) => {
        this.spotsData = data;
        this.allDataShow = this.spotsData; // push the data to another variable to make a single variable that contains all spots and favorites.
      });
    this.http
      .get('https://63122faa19eb631f9d81c71f.mockapi.io/favourite') // take the favourites spots data from API 
      .subscribe((data) => {
        this.favouritesData = data;
        this.allDataShow = [...this.allDataShow, ...this.favouritesData]; // add all favourites in that variable
      });
  }
  loginData: any;    //variable for login data storage
  spotsData: any;    // variable for spots data storage
  favouritesData: any;  // variable for favourites data storage
  allDataShow: any = [];  // variable for all spots data storage
  addClicked = false;  // here is the boolean variable that storage when the popup adds is up
  statusGetter =false;  // here is another boolean that told when to change between 2 pages. Is acting like routers

  inputData = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''), // form data from login form 
  });

 

  pushSpots(item: any) {
    return this.http.post(
      'https://63122faa19eb631f9d81c71f.mockapi.io/spot', // here new spots data is added to API 
      item
    );
  }

  pushFavourites(item: any) {
    return this.http.post(
      'https://63122faa19eb631f9d81c71f.mockapi.io/favourite',  // here new favourite spots data is added to API
      item
    );
  }
  deleteSpots(item: any) {
    return this.http.delete(
      'https://63122faa19eb631f9d81c71f.mockapi.io/spot/' + item.id // here data from spots is deleted from API
    );
  }
  deleteFavourites(item: any) {
    return this.http.delete(
      'https://63122faa19eb631f9d81c71f.mockapi.io/favourite/' + item.id // here data from fovourites is deleted from API
    );
  }

  ngOnInit(): void {}
}
// Here you can find all the functions and variables that I wanted to use globally in the entire application.
