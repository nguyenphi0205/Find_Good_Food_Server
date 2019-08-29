var mongoose = require("mongoose");

let orderStatusSchema = mongoose.Schema({
  name: {
    type: String
  },
  createDate: {
    type: Date
  }
});

// Export the model
module.exports.orderStatus = mongoose.model("OrderStatus", orderStatusSchema);
