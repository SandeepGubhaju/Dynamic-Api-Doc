const mongoose = require("mongoose");
const TokenPayment = mongoose.Schema({
    header1:String,
    para1:String,
    para2:String,
    image:String,
    para3:String,
})


module.exports =  mongoose.model("tokenpayments",TokenPayment);