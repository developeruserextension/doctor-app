import { FormService } from './../form.service';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers:[NgbModalConfig,NgbModal]
})
export class LoginFormComponent implements OnInit {
  submitted=false;
  loginForms: FormGroup;

  constructor(config:NgbModalConfig,private modalService:NgbModal,private fs:FormService,private formBuilder:FormBuilder) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.formvalidator();
  }
  formvalidator() {
   this.loginForms= this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }
  loginForm(email,password){
    this.submitted=true;
    if(this.submitted){
      this.fs.loginForm(email,password);
    }
  }
  ngOnInit() {
  }
  show(contentes){
    this.modalService.open(contentes);
  }
}
