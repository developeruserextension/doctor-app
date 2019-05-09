const express= require('express');
const app = express();
const formRoutes=express.Router();

let Form=require('../models/Form');

formRoutes.route('/add').post(function(req,res){
let form=new Form({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:req.body.password,
    confirmPassword:req.body.confirmPassword
});
//console.log(form);
form.save()
.then(form=>{
    res.status(200).json({'form':'form is added successfully'})
// console.log("Form is saved");
})
.catch(err => {
    res.status(400).send("unable to save data in database");
//    console.log("unable to save data in database");
})
});
formRoutes.route('/').post(function(req,res){ 
    var email=req.body.email;
    var password=req.body.password;
    Form.findOne({email:email,password:password},function(err,form){
       console.log(form);
        if(err){
            console.log(err);
            return res.status(500).send();
            console.log("Hello");
        }
        if(!email){
            return res.status(404).send();
            console.log("Hii");
        }
        return res.status(200).send();
    })
});
module.exports=formRoutes;