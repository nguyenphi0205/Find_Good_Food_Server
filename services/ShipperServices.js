var DataModel = require("../models/shipper");

exports.module = {
  getShipperList() {
    return DataModel.shipper.find().exec();
  },
};
