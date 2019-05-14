import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class JoinSliderComponent implements OnInit {

  constructor() { }

  joindocapp=[
    { image: 'assets/images/join_images/first.png',
      title: 'Look for a new provider',
  // tslint:disable-next-line: max-line-length
      content: 'Millions of patients use the DocApp website and app every month to look for a new provider by selecting their insurance plan, visit reason and location.'
    },
    {
      image: 'assets/images/join_images/Search-with-device-fixed.svg',
      title: 'Choose a provider',
// tslint:disable-next-line: max-line-length
      content: 'The patient selects an available time slot and books an appointment. The provider gets notified instantly and the patient gets appointment reminders by email and text.'

    },
    {
      image: 'assets/images/join_images/third.png',
      title: 'Book an appointment',
// tslint:disable-next-line: max-line-length
      content: 'The patient selects an available time slot and books an appointment.The provider gets notified instantly and the patient gets appointment reminders by email and text.'
    }
  ]

    myCarouselOptions={items: 1, dots: true, nav: true, autoplay: true, loop: true};

  ngOnInit() {
  }

}
