var DataModel = require("../models/news");

exports.module = {
  getNewsList() {
    return DataModel.new.find().exec();
  },
  
};
