var express = require("express");
var router = express.Router();
var categoryController = require("../controllers/categoriesController");

const controllerHandler = (promise, params) => async (req, res, next) => {
  const boundParams = params ? params(req, res, next) : [];
  try {
    const result = await promise(...boundParams);
    return res.json(result || { message: "OK" });
  } catch (error) {
    return res.status(500) && next(error);
  }
};
const c = controllerHandler;

router.get("/getCate", c(categoryController.getCategories));

module.exports = router;
