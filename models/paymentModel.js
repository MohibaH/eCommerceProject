const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const paymentSchema = new mongoose.Schema({
    paymentOwner:[{
        type: Schema.Types.ObjectId,
        ref:"User",
        required:true,
    }],
    paymentStatus:{
        type:String,
        required:true,
    },
    paymentType:{
        trype:String,
        required:true,
    },
    paymentAmount:{
        type:Number,
        required:true,
    }


},{ timestamps: true },
)
module.exports = mongoose.model('Payment',paymentSchema);
