var DataModel = require("../models/categories");

exports.module = {
  getCategories() {
    return DataModel.category.find().exec();
  },
  createCategories(req, res) {
  
    let categories = new DataModel.category(req.body);
    if (!req.body) {
      return res.status(400).send("request body is missing");
    }
    categories.save().then(doc => {
        if (!doc || doc.length === 0) {
          return res.status(500).send(doc);
        }
        res.status(200).send(doc);
      })
      .catch(err => {
        res.status(500).json(err);
    });
  }
};
