var mongoose = require("mongoose");

let categorySchema = mongoose.Schema({
    CategoryName: {
        type: String
    },
    Description: {
        type: String
    },
    Active: {
        type: Boolean
    }
});

module.exports.category = mongoose.model("Category", categorySchema);
