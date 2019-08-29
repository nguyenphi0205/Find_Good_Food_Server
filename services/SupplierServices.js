var DataModel = require("../models/suppliers");

exports.module = {
  getSuppliers() {
    return DataModel.supplier
      .find()
      .exec();
  },
  createSuppliers(req, res) {
    let suppliers = new DataModel.supplier(req.body);
    if (!req.body) {
      return res.status(400).send("request body is missing");
    }
    suppliers.save().then(doc => {
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
