import { Component, OnInit } from '@angular/core';
import {Title,Meta} from '@angular/platform-browser';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
title='Faq | DocApp'
  constructor(private titleService:Title,private meta:Meta ) { }

  ngOnInit() {
     this.titleService.setTitle(this.title);
     this.meta.updateTag({name:'keyword', content : 'Patient/s docapp,Consultation'});
     this.meta.updateTag({name:'description', content : 'consult with your Doctor'});
  }

}
