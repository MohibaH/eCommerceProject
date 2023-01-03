const Product= require("../models/productModel");
const bcrypt = require ("bcrypt");

exports.addProducts = async(req,res)=>{
    try{
        const checkProductId = await Product.findOne({productId:req.body.productId});
        if(checkProductId){
            return res.status(409).json({message: "product already added"});
        }
        const newProduct =  await Product.create({
            productId:req.body.productId,
            productName:req.body.productName,
            productImage:req.body.productImage,
            productPrice:req.body.productPrice,
            currency:req.body.currency,
            productDescription:req.body.productDescription,
            productQuantity:req.body.productQuantity,
        });
        res.status(201).json({message: "product added", data: newProduct});

    }
    catch(err){
        console.log(err);
        
    }
}