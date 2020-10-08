const userModel = require("../database/models/user");
const asyncErrorWrapper = require("express-async-handler");

const registerUserController = asyncErrorWrapper(async (req, res, next) => {
    //Getting post data
    const { username, password, email } = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    };

    //Creating new user from post data
    const newUser = new userModel({
        username,
        password,
        email,
    });
    await newUser.save();
    res.status(200).json({
        success: true,
        data: newUser,
    });
});

module.exports = { registerUserController };
