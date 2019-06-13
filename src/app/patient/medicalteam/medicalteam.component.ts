import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicalteam',
  templateUrl: './medicalteam.component.html',
  styleUrls: ['./medicalteam.component.css']
})
export class MedicalteamComponent implements OnInit {
  cookieValue=" ";
  record:any;
  constructor(private cookie:CookieService,private router:Router) {
    this.cookieValue = this.cookie.get('userdata');
    // var results=JSON.stringify(this.cookieValue);
      this.record=JSON.parse(this.cookieValue)
     console.log(this.record);
  }
  logout(){
  // var cookiedele = this.cookie.delete('userdata');
  // //console.log(cookiedele);
  // this.router.navigate(['home'])
  }
  ngOnInit() {}

}
