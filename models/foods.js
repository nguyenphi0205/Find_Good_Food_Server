var mongoose = require("mongoose");

let foodSchema = mongoose.Schema({
  ProductName:String,
  ProductDescription:String,
  Quantity:Number,
  UnitPrice:Number,
  Discount:String,
  ProductAvailable:Boolean,
  Image:String,
  Ranking:String,
  Note:String,

});

// Export the model
module.exports.food = mongoose.model("Food", foodSchema);
