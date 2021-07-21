const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: String,
    isLogin: Boolean,
    currentLocation: String,
    account: String
});

const User = mongoose.model("User", userSchema);

module.exports =User
