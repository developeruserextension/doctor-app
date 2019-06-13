import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { OwlModule } from 'ngx-owl-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule,FormsModule,NgForm} from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { HttpClientModule} from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { modulerouting } from './component-array';
import {MaterialModule} from './material.module';
import { MedicalteamComponent } from './patient/medicalteam/medicalteam.component';



@NgModule({
  declarations: [
    modulerouting,
    AppComponent,
    MedicalteamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    FormsModule,
    OwlModule,
    GooglePlaceModule,
    MaterialModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    ScrollToModule.forRoot(),
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
