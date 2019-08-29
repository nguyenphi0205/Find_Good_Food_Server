var DataModel = require("../models/foods");

exports.module = {
  getFoods() {
    return DataModel.food.find().exec();
  },
  createFoods(req, res) {
    let foods = new DataModel.food(req.body);
    if (!req.body) {
      return res.status(400).send("request body is missing");
    }
    foods
      .save()
      .then(doc => {
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
