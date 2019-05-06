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
  constructor(private slimLoadingBarService: SlimLoadingBarService,private _router:Router,private meta:Meta) {
     this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
   navigationInterceptor(event:Event) {
    if (event instanceof NavigationStart) {
      this.slimLoadingBarService.start(() => {
        console.log('Loading complete');
      });
    }
    if (event instanceof NavigationEnd) {
      this.slimLoadingBarService.complete();
    }
    if (event instanceof NavigationCancel) {
      this.slimLoadingBarService.complete();
    }
    if (event instanceof NavigationError) {
      this.slimLoadingBarService.complete();
    }
  }


  ngOnInit() {
    this.meta.addTag({name:'author', content : 'ZocDoc'});
    this.meta.addTag({name:'robots', content : 'index,follow'});
  }

}
