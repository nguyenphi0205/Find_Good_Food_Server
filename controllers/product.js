var DataModel = require("../models/product");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
      DataModel.product.find().then(doc => {
        res.json(doc)
    }).catch((err) => {
        res.status(500).json(err)
    })
};

exports.product_create = function(req, res) {
  var product = new DataModel.product(req.body);
        if (!req.body) {
            return res.status(400).send('request body is missing');
        }
        console.log(product);
        product.save().then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }
            res.status(200).send(doc);
        }).catch((err) => {
            res.status(500).json(err)
        })
};

exports.product_details = function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

exports.product_update = function(req, res) {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    product
  ) {
    if (err) return next(err);
    res.send("Product udpated.");
  });
};

exports.product_delete = function(req, res) {
  Product.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
