
'use strict'

var DataModel = require('../models/suppliers');

// get data

exports.getSupplier = (req,res)=>{
    DataModel.supplier.find().then(doc => {
        res.json(doc)
    }).catch((err) => {
        res.status(500).json(err)
    })
}

//create supplier 
exports.supplierCreate = (req,res)=>{
    var supplier = new DataModel.supplier(req.body);
    if (!req.body) {
        return res.status(400).send('request body is missing');
    }
    supplier.save().then(doc => {
        if (!doc || doc.length === 0) {
            return res.status(500).send(doc)
        }
        res.status(200).send(doc);
    }).catch((err) => {
        res.status(500).json(err)
    })
}