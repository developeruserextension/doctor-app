import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],

})
export class SliderComponent implements OnInit {

  images = [
    'assets/images/university_hospital.jpg' ,
    'assets/images/bjc_medical.jpg' ,
    'assets/images/medstar_health.jpg',
     'assets/images/tufts.jpg',
    'assets/images/university_hospital.jpg',
     'assets/images/bjc_medical.jpg' ,
     'assets/images/medstar_health.jpg' ,
    'assets/images/tufts.jpg',
     'assets/images/university_hospital.jpg' ,
    'assets/images/bjc_medical.jpg' ,
    'assets/images/medstar_health.jpg' ,
    'assets/images/tufts.jpg' ,
  ]

  myCarouselOptions={items: 4, dots: false, nav: true};

  constructor() {
  }

  ngOnInit() {
  }

}
