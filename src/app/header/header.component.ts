import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // routes=[
  //   {linkName:'Home',url:'home'},
  //   {linkName:'Services',url:'services'},
  //   {linkName:'About',url:'about'},
  //   {linkName:'Log in / Sign up',url:'login-signup'},
  // ]

  homeRoute='home';
  servicesRoute="services";
  aboutRoute="about";
  login_signupRoute="login&signup";


  ngOnInit() {}

}

