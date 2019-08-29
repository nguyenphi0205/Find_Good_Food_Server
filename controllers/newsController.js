let NewServices = require("../services/NewServices");

module.exports = {
  getNewsList() {
    return NewServices.module.getNewsList();
  }
};
