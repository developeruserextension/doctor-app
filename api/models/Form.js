const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Form=new Schema({
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
        collection:'form'
});
module.exports=mongoose.model('Form',Form);