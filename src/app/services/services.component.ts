import { Component, OnInit } from '@angular/core';
import {Title,Meta} from '@angular/platform-browser';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
title='Service | Zocdoc'
  constructor(private titleService:Title,private meta:Meta ) { }

  ngOnInit() {
     this.titleService.setTitle(this.title);
     this.meta.updateTag({name:'keyword', content : 'Service ZocDoc,Consultation'});
     this.meta.updateTag({name:'description', content : 'consult with your Doctor'});
  }

}
