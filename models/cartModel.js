const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema({
    cartOwner:[{
        type: Schema.Types.ObjectId,
        ref:"User",
        required:true,
    }],
    productDetails:[{
            productId:Number,
            productQuantity: Number,
            productName:String,
            productPrice:Number
    }],
    totalbill:{
        type:Number,
        require:true,
        default:0
    }

},{ timestamps: true },
)

module.exports = mongoose.model('Cart',cartSchema);

