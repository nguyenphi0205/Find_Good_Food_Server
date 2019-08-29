var DataModel = require("../models/users");

exports.module = {
  getUserList() {
    return DataModel.user.find().exec();
  },
};
