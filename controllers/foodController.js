let FoodServices = require("../services/FoodServices");

module.exports = {
  getFoods() {
    return FoodServices.module.getFoods();
  },
  createFoods(req, res) {
    return FoodServices.module.createFoods(req, res);
  }
};
