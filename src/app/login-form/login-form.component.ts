import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers:[NgbModalConfig,NgbModal]
})
export class LoginFormComponent implements OnInit {

  constructor(config:NgbModalConfig,private modalService:NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }
  show(contentes){
    this.modalService.open(contentes);
  }
}
