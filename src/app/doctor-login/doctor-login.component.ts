import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content);
  }
}
