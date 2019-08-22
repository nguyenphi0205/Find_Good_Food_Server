var mongoose = require("mongoose");

let ProductSchema = mongoose.Schema({
  name: String,
  price: Number
});

// Export the model
module.exports.product = mongoose.model("Product", ProductSchema);
