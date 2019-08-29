var mongoose = require("mongoose");

let newSchema = mongoose.Schema({
    newTitle:String,
    newType:String,
    content:String,
    dateCreate:Date,
    author:String
});

// Export the model
module.exports.new = mongoose.model("New", newSchema);
