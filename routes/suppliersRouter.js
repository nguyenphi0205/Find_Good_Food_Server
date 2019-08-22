var express = require('express');
var router = express.Router();

var supplierController = require('../controllers/suppliersController');

router.get('/getSuppliers', supplierController.getSupplier);
router.post('/create',supplierController.supplierCreate);



module.exports = router;