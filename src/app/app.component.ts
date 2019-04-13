import { Component ,OnInit} from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Doctor-app';
  constructor(  private slimLoadingBarService: SlimLoadingBarService,private _router:Router) {
    this._router.events.subscribe((event: any): void => {
      this.navigationInterceptor(event);
    });
  }
  navigationInterceptor(event): void {
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
  ngOnInit() {}

}
