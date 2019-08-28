var DataModel = require("../models/foods");

exports.module = {
  getFoods() {
    return DataModel.food.find().exec();
  }
  
};
