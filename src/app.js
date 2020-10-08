const express = require("express");
const path = require("path");
const customErrorHandler = require("./middleware/errors/errorHandler");
//Environment variables
require("dotenv").config({
    path: path.resolve(__dirname, "./config/env/config.env"),
});

//Database Connection
require("./database/databaseConnection");

//App INIT
const app = express();
const PORT = process.env.PORT;

//Form-data Handling
app.use(express.json());

//Routes
const authRoute = require("./routes/auth/auth");

app.use("/auth", authRoute);


app.use(customErrorHandler)

app.get("/error", function (req, res, next) {
    throw new Error("Hata")
});


app.listen(PORT, () => {
    console.log(`Sunucu ${PORT}'da hayatta.`);
});
