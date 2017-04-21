var mongoose              = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

// Create User Schema
var UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String
});

// Add passport-local-mongoose plugin
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);