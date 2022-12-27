const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const cardSchema = new mongoose.Schema({
    cardBrand:{
        type:String,
        required:true,
    },
    cardExipryMonth:{
        type:Number,
        required:true,
    },
    cardExpiryMonth:{
        type:Number,
        required:true,
    },
    cardCvvVerified:{
        type:Boolean,
        required:true,
    }
},{ timestamps: true },
)
module.exports = mongoose.model('Card',cardSchema);