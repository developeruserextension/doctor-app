import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validators';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;

  constructor(public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required,Validators.minLength(6)]],
    },{
      validators:MustMatch('password','confirmPassword'),
    });
  }
  get f(){
    return this.registerForm.controls;
}
onSubmit(){
  this.submitted = true;
  if (this.registerForm.invalid) {
    return;
}
alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}

}
