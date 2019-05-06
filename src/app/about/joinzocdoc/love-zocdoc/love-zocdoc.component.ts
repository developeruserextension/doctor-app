import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-love-zocdoc',
  templateUrl: './love-zocdoc.component.html',
  styleUrls: ['./love-zocdoc.component.css']
})
export class LoveZocdocComponent implements OnInit {

  constructor() { }

  provider=[
    {
      image: 'assets/images/join_images/ZD_icon_multiple.patients_blue.png',
      title: 'Get new patients',
      content: 'Most Zocdoc providers received between 26 and 119 new patient bookings in 2017.'
    },
    {
      image: 'assets/images/join_images/ZD_icon_book.appt1_blue.png',
      title: 'Fill last minute openings',
      content: 'Almost half of Zocdoc appointments occur within 72 hours of booking.'
    },
    {
      image: 'assets/images/join_images/ZD_icon_review_blue.png',
      title: 'Strengthen your reputation',
      content: 'Get verified reviews from real patients. After just one year, the average provider has 40 ratings.'
    },
    {
      image: 'assets/images/join_images/ZD_icon_money_blue.png',
      title: 'Diversify your payor mix',
      content: '82% of Zocdoc bookings are from commercially insured or cash-pay patients.'
    }

  ]

  ngAfterViewInit(): void {
    $(".img_fluid_container").magnificPopup({ type: 'image' });
  }
  ngOnInit() {
  }

}
