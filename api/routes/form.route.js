const express= require('express');
const app = express();
const formRoutes=express.Router();
const mongoose=require('mongoose');

let Form=require('../models/Form');
var pateintForm = mongoose.model('pateintForm', pateintForm);
var joindocForm = mongoose.model('joindocForm', joindocForm);


//login form
formRoutes.route('/login').post(function(req,res){
  var email=req.body.email;
  var password=req.body.password;
    pateintForm.findOne({email:email,password:password},function(error,results){
  if(results!=null){
    if(results.email == email && results.password ==password){
      return res.json(results);
    }
  }
  if(error){
      return error.json(error);
  }

  });
});

//add joinForm in database
formRoutes.route('/joinforms').post(function(req,res){
  let joinform=new joindocForm({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    specialities:req.body.specialities,
    mobile:req.body.mobile,
    zipcode:req.body.zipcode,
    email:req.body.email
});
console.log(joinform);
joinform.save((err,result)=>{
  if(err){
    console.log("unable to save data in Database");
  // res.send({success:"Failed to join Doctor",status:500});
  }
  // res.send({success:"Successfully Added new Doctor",status:200})
  console.log("saved data in Database");
})
});

//get data from Database
formRoutes.route('/searchdoctor').post(function(req,res){
var specialities=req.body.speciality;
//console.log(specialities);
joindocForm.findOne({specialities:specialities},function(err,joinsForm){
    if(err){
      console.log(err);
    }
    res.json(joinsForm);
    console.log(joinsForm);
  })
  });

//register Form
formRoutes.route('/register').post(function(req,res){
let form=new pateintForm({
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

module.exports=formRoutes;
