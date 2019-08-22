
var DataModel = require('../models/suppliers');


exports.getListAllSupplier = (req,res)=>{
    DataModel.supplier.find().then(doc => {
        res.json(doc)
    }).catch((err) => {
        res.status(500).json(err)
    })
}
module.exports = {
  
    list(req, res) {
      return User
      .all()
    },
  };