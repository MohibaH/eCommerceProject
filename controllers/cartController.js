const Product= require("../models/productModel");
const Cart= require("../models/cartModel");
const bcrypt = require ("bcrypt");

exports.addToCart = async(req,res)=>
{
    const { productId, productQuantity, productName, productPrice } = req.body;

  const userId = "63aac01f90a746db9b5e95b1"; //TODO: the logged in user id

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      //cart exists for user
      let itemIndex = cart.productDetails.findIndex(Product => Product.productId == productId);

      if (itemIndex > -1) {
        //aIF the product exists in the cart, update the quantity
        let productItem = cart.productDetails[itemIndex];
        productItem.productQuantity = productQuantity;
        cart.productDetails[itemIndex] = productItem;
      } else {
        //IF the product does not exist in cart, add new item
        
        cart.productDetails.push({ productId, productQuantity, productName, productPrice });
       
        
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      //no cart for user, create new cart
      const newCart = await Cart.create({
        cartOwner:req.body.cartOwner,
        //userId,
        productDetails: [{productId, productQuantity, productName, productPrice  }],
        totalbill: req.body.totalbill
      });

      return res.status(201).send("added successfully", newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};


//     try{
//         //1 check if the product exists
//         const cartOwner = await Cart.findById(req.body.cartOwner);

//  if(!cartOwner){
//     return res.status(400).json({message:"Product to be added to the cart is not found"});

// }
//         // const availableProduct = await Product.findById(req.params["productId"]);
//         //     if(!availableProduct){
//         //         res
//         //         .status(400)
//         //         .json({message: "Product to be added to the cart is not found "});
//         //     }
        
//         // //2 check if the product is available in stock 
//         // const productQuantity = req.body.productQuantity;
//         // if (productQuantity==0)
//         // {
//         //     return res.status(409).json({message: "The product is out of stock"});
//         // }
//         // //3 check if the product already exists in cart before adding
//         // const prodToBeAdded = await Product.findById(req.params.id);
//         // if(!prodToBeAdded){
            
//         //     return res.status(400).json({message: "Product already added"});

//         // }
//         let price = await Cart.find({productDetails: productPrice});
//         let quantity =  await Cart.find({productDetails: productQuantity});
//         let total = price*quantity;
// const addintoCart =  await Cart.create({
//     cartOwner:req.body.cartOwner,
//     productDetails:req.body.productDetails,
//     productQuantity:req.body.productQuantity,
//     totalbill:req.body.total
//         });
//         res.status(201).json({message: "added to cart successfully", data: addintoCart});
//     }
//     catch(err){
//         console.log(err);
//     }
// }
