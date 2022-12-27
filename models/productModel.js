const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productId:{
        type:String,
        required:true,
        
    },
    productName:{
        type:String,
        required:true,
        minlength:5,
    },
    productImage:{
        type:String,
        required:true,
    },
    productPrice:{
        type:Number,
        required:true,
    },
    currency:{
        type:String,
        required:true,

    },
    productDescription:{
        type:String,
        required:true,
        minlength:5,
        maxlength:100,
    },
    productQuantity:{
        type:Number,
        required:true,
    }
},{ timestamps: true },
)
module.exports = mongoose.model('Product', productSchema);