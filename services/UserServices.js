var DataModel = require("../models/users");

exports.module = {
  getUserList() {
    return DataModel.user.find().exec();
  },
  createUser(req, res) {
    let users = new DataModel.user(req.body);
    if (!req.body) {
      return res.status(400).send("request body is missing");
    }
    users.save().then(doc => {
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
