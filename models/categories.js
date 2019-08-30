var mongoose = require("mongoose");

let categorySchema = mongoose.Schema(
  {
    CategoryName: {
      type: String
    },
    Description: {
      type: String
    },
    Active: {
      type: Boolean
    },
    CreateDate: {
      type: Date
    },
    foods: [
      {
        _id: false,
        food: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Food"
        }
      }
    ]
  },
  { strict: false }
);

module.exports.category = mongoose.model("Category", categorySchema);
