let CategoriesServices = require('../services/CategoriesServices')

module.exports = {
  getCategories() {
    return CategoriesServices.module.getCategories();
  },
  createCategories(req, res) {
    return CategoriesServices.module.createCategories(req, res);
  }
};
