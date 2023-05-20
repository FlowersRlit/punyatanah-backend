const express = require("express");
const UserController = require("../controllers/UserController");
const TanahController = require("../controllers/TanahController");

const router = express.Router();

//user
router.post("/user/registerNewUser", UserController.registerNewUser);

//tanah
router.get("/tanah/getListTanah", TanahController.getListTanah);

module.exports = router;
