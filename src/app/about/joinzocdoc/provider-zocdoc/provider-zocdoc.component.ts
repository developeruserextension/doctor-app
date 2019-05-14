import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-zocdoc',
  templateUrl: './provider-zocdoc.component.html',
  styleUrls: ['./provider-zocdoc.component.css']
})
export class ProviderZocdocComponent implements OnInit {

  constructor() { }
  provider_docapp=[
    { image: 'assets/images/join_images/card-image.png',
      doctor_name:'Dr. Maggie Cleaves, MD',
      provider_bio: 'Psychiatrist Washington, D.C.',
// tslint:disable-next-line: max-line-length
      description_card:'“My new practice took off in no time, thanks to the advice I received from DocApp!”'
    },
    { image: 'assets/images/join_images/card-image.png',
      doctor_name:'Dr. Charles Pearson, DDS',
      provider_bio: 'Dentist Sterling Heights, MI',
// tslint:disable-next-line: max-line-length
      description_card:'DocApp has greatly assisted in new patients for our office. I would say over 50 percent have had return visits and have referred others.”'
    },
    {
      image: 'assets/images/join_images/card-image.png',
      doctor_name:'Dr. Monica C. Martin, MD',
      provider_bio: 'OB-GYN New York, NY',
// tslint:disable-next-line: max-line-length
      description_card:'DocApp has been excellent. I especially like the fact that you help to get the insurance information at the time of booking.”'
    },
    {
      image: 'assets/images/join_images/card-image.png',
      doctor_name:'Dr. Jamie Bassel, DC',
      provider_bio: 'Chiropractor New York, NY',
// tslint:disable-next-line: max-line-length
      description_card:'“It has been the one platform that I can measure the return on my investment with confidence. It has made a significant difference in improving access to new patients.”'
    }
  ]

  ngOnInit() {
  }
}
