const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let patForm=new Schema({
    firstName:{
    type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    confirmPassword:{
        type:String
    }
    },{
        collection:'docapp_register'
});
let joinForm=new Schema({
    firstName:{
    type:String
    },
    lastName:{
        type:String
    },
    specialities:{
        type:String,
    },
    mobile:{
        type:Number
    },
    zipcode:{
        type:Number
    },
    email:{
        type:String,
        unique:true
    },
    },{
        collection:'docapp_joinForm'
});

var pateintForm = mongoose.model('pateintForm', patForm);
var joindocForm = mongoose.model('joindocForm', joinForm);
