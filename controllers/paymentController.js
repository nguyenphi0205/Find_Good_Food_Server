let PaymentServices = require("../services/PaymentServices");

module.exports = {
  getPaymentList() {
    return PaymentServices.module.getPaymentList();
  }
};
