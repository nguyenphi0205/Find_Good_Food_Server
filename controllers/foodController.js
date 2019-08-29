var getFoodServices = require('../services/foodServices')

module.exports = {
  getFoods() {
    return getFoodServices.module.getFoods();
  }
};

