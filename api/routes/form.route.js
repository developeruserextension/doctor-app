const express= require('express');
const app = express();
const formRoutes=express.Router();

let Form=require('../models/Form');

//login form
formRoutes.route('/login').post(function(req,res){
  var email=req.body.email;
  var password=req.body.password;
  console.log(email+password);
  //console.log(Form);
  Form.findOne({ email: req.body.email,password:req.body.password },function(err,form){
      if(email){
        if (password) {
         console.log('Correct password.');
        }
        else{
          console.log('Incorrect password.');
        }
      }
      else{
        console.log('Incorrect email.');
      }
  });
});

//register Form
formRoutes.route('/register').post(function(req,res){
let form=new Form({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:req.body.password,
    confirmPassword:req.body.confirmPassword
});
//console.log(form);
form.save((err,result)=>{
if(err){
  console.log("Ther is an error in adding user in database");
  res.send({success:"Failed to add User",status:500});
}
res.send({success:"Successfully Added new user",status:200})
});
});

formRoutes.route('/joinforms').post(function(req,res){
  let joinform=new Form({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    specialities:req.body.specialities,
    mobile:req.body.mobile,
    zipcode:req.body.zipcode,
    email:req.body.email
});
//console.log(joinform);
joinform.save((err,result)=>{
  if(err){
    console.log("unable to save data in Database");
  res.send({success:"Failed to join Doctor",status:500});
  }
  res.send({success:"Successfully Added new Doctor",status:200})
})
});

module.exports=formRoutes;
