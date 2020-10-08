const express = require("express");
const router = express.Router();

//Controllers
const {registerUserController} = require("../../controllers/auth")

router.post("/register", registerUserController);

module.exports = router;
