const Product= require("../models/productModel");
const Cart= require("../models/cartModel");
const bcrypt = require ("bcrypt");

exports.addToCart = async(req,res)=>
{
    try{
        //1 check if the product exists
        const availableProduct = await Product.findById(req.params.id);
            if(!availableProduct){
                return res
                .status(400)
                .json({message: "Product to be added to the cart is not found "});
            }
        
        //1 check if the product is available in stock 
        const productQuantity = req.body.productQuantity;
        if (productQuantity==0)
        {
            res.status(409).json({message: "The product is out of stock"});
        }
        //3 check if the product already exists in cart before adding
        const prodToBeAdded = await Product.findById(req.params.id);
        if(!prodToBeAdded){
            return res.status(400).json({message: "Product already added"});
        }

const addintoCart =  await Cart.create({
            productId:req.body.productId,
            productName:req.body.productName,
            productImage:req.body.productImage,
            productPrice:req.body.productPrice,
            currency:req.body.currency,
            productDescription:req.body.productDescription,
            productQuantity:req.body.productQuantity,
        });
        res.status(201).json({message: "added to cart successfully", data: addintoCart});





    }
    catch(err){
        console.log(err);
    }
}
