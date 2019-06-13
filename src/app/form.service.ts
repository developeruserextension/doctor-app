import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';
import {  NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
    providedIn: 'root',
  })
export class FormService{
    uri='http://localhost:4000';
    record:any;
    result:any=[];
    constructor(private http:HttpClient,private cookieService:CookieService,private router:Router,private NgbModal:NgbModal){}

    addForm(firstName,lastName,email,password,confirmPassword){
        const obj={
          firstName: firstName,
          lastName:lastName,
          email:email,
          password:password,
          confirmPassword:confirmPassword
        };
       console.log(obj);
        this.http.post(`${this.uri}/register`, obj).subscribe(res => console.log("Done"));
      }

      loginForm(email,password){
        const obj1={
          email: email,
          password: password
        };
        console.log(obj1);
        this.http.post(`${this.uri}/login`,obj1).subscribe((res) =>{
          /*var result = Object.entries(res).map(([k, v]) => ([k, v]));
          result.push(["login","true"]);
          console.log(result);*/
         var patient=JSON.stringify(res);
         console.log(patient);
            this.cookieService.set('userdata',patient);
           this.router.navigate(['patient/medicalteam']);
        },
        (error)=> {
            console.log('error is ', error)
            alert("Please check email and password");
        });
      }

      joinFormStarted(firstName,lastName,specialities,mobile,zipcode,email){
        const object={
          firstName:firstName,
          lastName:lastName,
          specialities:specialities,
          mobile:mobile,
          zipcode:zipcode,
          email:email
        }
        console.log(object);
        this.http.post(`${this.uri}/joinforms`, object).subscribe(res => console.log("Done"));
      }

      search_doctor(speciality,place,appointment_date){
        const objects={
          speciality:speciality,
        }
        console.log(objects);
        this.http.post(`${this.uri}/searchdoctor`,objects).subscribe(res => console.log("Done"));
      }

      getSearchForm() {
        console.log("Yes")
        return this.http.get(`${this.uri}`);
      }

}
