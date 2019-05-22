import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
export class FormService{
    uri='http://localhost:4000';
    constructor(private http:HttpClient){}
    addForm(firstName,lastName,email,password,confirmPassword){
        const obj={
          firstName: firstName,
          lastName:lastName,
          email:email,
          password:password,
          confirmPassword:confirmPassword
        };
       console.log(obj);
      // console.log(`${this.uri}`);
        this.http.post(`${this.uri}/register`, obj).subscribe(res => console.log("Done"));
      }
      getForms(email,password){
        const obj1={
          email:email,
          password:password
        };
        console.log(obj1);
        this.http.post(`${this.uri}/login`, obj1).subscribe(res => console.log('Yes'));
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
          place:place,
          appointment_date:appointment_date
        }
        console.log(objects);
        this.http.post(`${this.uri}/search_doctor`,objects).subscribe(res => console.log("Done"));
      }
}
