import { Component ,OnInit} from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError,Event } from '@angular/router';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private meta:Meta) {
   
  }
  

  ngOnInit() {
    this.meta.addTag({name:'author', content : 'ZocDoc'});
    this.meta.addTag({name:'robots', content : 'index,follow'});
  }

}
