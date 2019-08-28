var getCategoriesServices = require('../services/CategoriesServices')

module.exports = {
  getCategories() {
    return getCategoriesServices.module.getCategories();
  }
};
