const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:[true,'Please enter your fullname'],
        minlenght:5,
        trim:true
    },
    lastName:{
        type:String,
        required:[true,'Please enter your fullname'],
        minlenght:5,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
            type:String,
            trim:true,
            minLength: 8,
            required:true,
    },
    country:{
            type:String,
            required:[true,'Please choose your Country'],
    },
    city:{
        type:String,
        required:[true,'Please choose your City'],
    },
    address:{
        type:String,
        trim:true,
        maxlength: 500,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    zipCode:{
        type:String,
        minlenght:4,
        required:true,
    }

},{ timestamps: true },
)

module.exports = mongoose.model('User',userSchema);
