import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HelperService } from './helper.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ LoginComponent],
})
export class AppComponent implements OnInit {
  title = 'Atta-Project';

  constructor(public help: HelperService) {}
  

  ngOnInit(){
    
    
  }
  
  
  
  
  
}
