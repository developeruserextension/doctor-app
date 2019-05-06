import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.css']
})
export class FeatureSectionComponent implements OnInit {
    // title= 'join | Zocdoc';

  constructor(private titleService: Title , private meta: Meta) { }
   ngOnInit() {
    // this.titleService.setTitle(this.title);
    // this.meta.updateTag({name:'keyword', content : 'Join ZocDoc'});
    // this.meta.updateTag({name:'description', content : 'Join ZocDoc and Find Doctor'});
  }

}
