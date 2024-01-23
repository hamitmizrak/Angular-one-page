// Mongo (Node JS)

// UserRegister.ts
/*
    id:number=0;
    username:string="";
    email:string="";
    password:string="";
    created_date:string="";
*/

// Kütüphane import
const mongoose = require('mongoose');

// database oluşturmak
const nodejsMongoSchema= mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        minLenght:3,
        maxLength:44,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        minLenght:3,
        maxLength:44,
        lowercase:true
    },
    password:{
        type:Number,
        required:true,
        trim:true,
        minLenght:3,
        maxLength:44,
        lowercase:true,
    },
    created_date:{
        type:Date,
       default: Date.now,
    }
}); //end nodejsMongoSchema

// EXPORT
module.exports = mongoose.model("HamitNodeJs",nodejsMongoSchema)