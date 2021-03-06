var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");

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

router.get("/getUser", c(userController.getUserList));
router.post("/register",userController.createuser);
module.exports = router;
