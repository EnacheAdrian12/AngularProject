import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HelperService } from './helper.service';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavBarComponent } from './front-page/nav-bar/nav-bar.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './front-page/map/map.component';
import { LocationsComponent } from './front-page/locations/locations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { NavBarAddSpotComponent } from './front-page/nav-bar/nav-bar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FrontPageComponent,
    NavBarComponent,
    MapComponent,
    LocationsComponent,
    NavBarAddSpotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YourApiGoogleMapsKey',
    }),
    BrowserAnimationsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
