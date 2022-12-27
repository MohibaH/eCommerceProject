const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    cartOwner:[{
        type: Schema.Types.ObjectId,
        ref:"User",
        required:true,
    }],
    productDetails:[{
        type: Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    }],
    productQuantity:{
        type:Number,
        required:true,
    },
    bill:{
        type:Number,
        require:true,
        default:0
    }

},{ timestamps: true },
)

module.exports = mongoose.model('Cart',cartSchema);

