import { FormService } from '../form.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validators';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  message="";
  show: boolean = false
  constructor(private formBuilder:FormBuilder,private fs:FormService,config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.createForm();

   }
   createForm() {
    this.registerForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, Validators.required]
    }, {
      validator: MustMatch('password','confirmPassword')
    });
  }

  get f(){return this.registerForm.controls;}
  
addForm(firstName,lastName,email,password,confirmPassword){
  this.submitted=true;
  if (this.registerForm.invalid) {
    return;
  }
  if(this.submitted){
    this.fs.addForm(firstName,lastName,email,password,confirmPassword);
    this.message="You are Successfully registered";
    this.show=true;
    // this.router.navigate(['about'])
  }
}
open(content) {
  this.modalService.open(content);
}
ngOnInit() {}
}
