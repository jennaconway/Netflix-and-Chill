const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{type: String},
    name:{type: String},
    score:{type: Number}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
