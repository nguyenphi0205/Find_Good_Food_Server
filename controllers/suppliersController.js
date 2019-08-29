let SupplierServices = require("../services/SupplierServices");

module.exports = {
  getSuppliers() {
    return SupplierServices.module.getSuppliers();
  },
  createSuppliers(req, res) {
    return SupplierServices.module.createSuppliers(req, res);
  }
};
