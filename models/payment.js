var mongoose = require("mongoose");

let paymentSchema = mongoose.Schema({
   paymentType:{
       type:String
   },
   allowed:{
       type:Boolean
   }
});

// Export the model
module.exports.payment = mongoose.model("payment", paymentSchema);
