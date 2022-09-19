import { Component, Injectable, OnInit } from '@angular/core';


// this is the second page and works to merge the others components.
Injectable()
@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
