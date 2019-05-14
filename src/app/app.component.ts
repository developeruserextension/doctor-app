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
  constructor(private meta:Meta,private slimLoadingBarService: SlimLoadingBarService,private _router:Router) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  navigationInterceptor(event:Event) {
    if (event instanceof NavigationStart) {
      this.slimLoadingBarService.start();
      console.log("Loading Start");
    }
    if (event instanceof NavigationEnd) {
      this.slimLoadingBarService.complete();
      console.log("Loading End");
    }
    if (event instanceof NavigationCancel) {
      this.slimLoadingBarService.complete();
    }
    if (event instanceof NavigationError) {
      this.slimLoadingBarService.complete();
    }
  }
  

  ngOnInit() {
    this.meta.addTag({name:'author', content : 'DocApp'});
    this.meta.addTag({name:'robots', content : 'index,follow'});
  }

}
