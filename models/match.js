const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{},
    
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }
});

const match = mongoose.model("Book", bookSchema);

module.exports = match;
