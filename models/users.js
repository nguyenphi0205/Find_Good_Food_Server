var mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  FirstName: {
    type: String
  },
  LastName: {
    type: String
  },
  Address1: {
    type: String
  },
  Address2: {
    type: String
  },
  City: {
    type: String
  },
  PostalCode: {
    type: String
  },
  Country: {
    type: String
  },
  Phone: {
    type: Number
  },
  Email: {
    type: String
  },
  Password: {
    type: String
  },
  CreditCard: {
    type: String
  },
  CreditCardTypeID: {
    type: String
  },
  CardExpMonth: {
    type: String
  },
  CardExpYEar: {
    type: String
  },
  BillingAddress: {
    type: String
  },
  BillingRegion: {
    type: String
  },
  BillingPostalCode: {
    type: String
  },
  ShippingAddress: {
    type: String
  },
  ShipCity: {
    type: String
  },
  ShipRegion: {
    type: String
  },
  ShipPostalCode: {
    type: String
  },
  DateEnter: {
    type: Date
  },
  Active: {
    type: Boolean
  }
});

module.exports.user = mongoose.model("User", userSchema);
