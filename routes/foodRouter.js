var express = require("express");
var router = express.Router();
var foodController = require("../controllers/foodController");

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

router.get("/getFood", c(foodController.getFoods));
router.get("/createFood", foodController.createFoods);

module.exports = router;
