const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username bilgisi girilmedi / gerekli."],
        minlength: [3, "3 Haneden daha kısa username kabul edilemez"],
        maxlength: 20,
    },
    password: {
        type: String,
        required: [true, "Password bilgisi girilmedi / gerekli."],
        minlength: [6, "6 Haneden daha kısa bir password kabul edilemez."],
        maxlength: 30,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email bilgisi girilmedi / gerekli."],
        validate: {
            validator: function (v) {
                return validator.isEmail(v);
            },
            message: (props) => `${props.value} geçersiz bir mail adresi.`,
        },
    },
    profileImage: { type: String, default: "default.png" },
    updated: { type: Date, default: Date.now },
});

userSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        this.password = hash;
    });
    next();
});
module.exports = mongoose.model("User", userSchema);
