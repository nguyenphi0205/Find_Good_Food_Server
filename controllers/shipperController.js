let ShipperServices = require("../services/ShipperServices");

module.exports = {
  getShipperList() {
    return ShipperServices.module.getShipperList();
  },
};
