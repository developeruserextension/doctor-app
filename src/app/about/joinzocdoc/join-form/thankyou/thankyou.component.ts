import { Component, OnInit,AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';


@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  constructor() { }

  ngAfterViewInit(): void {
    $(".image__container_join").magnificPopup({ type: 'image' });
  }
  ngOnInit() {
  }

}
