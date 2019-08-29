var mongoose = require("mongoose");

let orderSchema = mongoose.Schema({
  orderNumber: {
    type: Number
  },
  orderDate: {
    type: Date
  },
  shipDate: {
    type: Date
  },
  salesTax: {
    type: Number
  },
  paymentDate: {
    type: Date
  },
  packageDate: {
    type: Date
  }
});

// Export the model
module.exports.order = mongoose.model("Order", orderSchema);
