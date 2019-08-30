var mongoose = require("mongoose");

let supplierSchema = mongoose.Schema(
  {
    CompanyName: String,
    ContactTitle: Number,
    Address1: String,
    Address2: String,
    City: String,
    PostalCode: Number,
    Country: String,
    Phone: Number,
    Email: String,
    URL: String,
    PaymentMethod: String,
    DiscountType: String,
    TypeGoods: String,
    Logo: String,
    ActiveSupplier: Boolean,
    CreateDate: {
      type:Date
    },

    foods: [
      {
        _id: false,
        food: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Food"
        }
      }
    ]
  },
  { strict: false }
);

// Export the model
module.exports.supplier = mongoose.model("Supplier", supplierSchema);
