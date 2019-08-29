var mongoose = require("mongoose");

let orderDetailSchema = mongoose.Schema({
  price: {
    type: Number
  },
  quantity: {
    type: Number
  },
  discount: {
    type: Number
  },
  total: {
    type: Number
  },
  billDate: {
    type: Date
  }
});

// Export the model
module.exports.orderDetail = mongoose.model("OrderDetail", orderDetailSchema);
