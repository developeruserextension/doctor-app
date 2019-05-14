import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
title="About | DocApp"
  constructor(private titleService:Title ,private meta :Meta) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({name:'keyword',content:'About ZocDoc,ZocDoc'})
    this.meta.updateTag({name:'description', content : 'Know About ZocDoc'});
  }

}
