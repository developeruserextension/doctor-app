import { Component, OnInit } from '@angular/core';
import {Title,Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home | ZocDoc';
  constructor(private titleService:Title,private meta:Meta ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({name:'keyword', content : 'ZocDoc,Find a Doctor'});
    this.meta.updateTag({name:'description', content : 'Doctor Find'});
  }

}
