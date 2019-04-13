import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { OwlModule } from 'ngx-owl-carousel';
import { modulerouting } from './component-array';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    modulerouting,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    ModalModule.forRoot(),
    SlimLoadingBarModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
