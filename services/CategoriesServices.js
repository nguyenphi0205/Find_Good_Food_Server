var DataModel = require("../models/categories");

exports.module = {
  getCategories() {
    return DataModel.category.find().exec();
  }
};
