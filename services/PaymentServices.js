var DataModel = require("../models/payment");

exports.module = {
  getPaymentList() {
    return DataModel.payment.find().exec();
  }
};
