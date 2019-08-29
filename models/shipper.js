var mongoose = require("mongoose");

let shipperSchema = mongoose.Schema({
    CompanyName:{
        type:String
    },
    Phone:{
        type:Number
    },
    DateCreate:{
        type:Date
    }
});

// Export the model
module.exports.shipper = mongoose.model("Shipper", shipperSchema);
