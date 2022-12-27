const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderOwner:[{
    type: Schema.Types.ObjectId,
        ref:"User",
        required:true,
    }],
    orderDetails:[{
        type: Schema.Types.ObjectId,
        ref:"Cart",
        required:true,
    }]

},{ timestamps: true },
)

module.exports = mongoose.model('Order',orderSchema);

