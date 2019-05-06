import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zocdoc-provider',
  templateUrl: './zocdoc-provider.component.html',
  styleUrls: ['./zocdoc-provider.component.css']
})
export class ZocdocProviderComponent implements OnInit {

  scroll(el: HTMLElement) {
    el.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
