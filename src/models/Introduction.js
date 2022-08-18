const mongoose = require("mongoose");
const Introduction = mongoose.Schema({
    title1:String,
    subtitle1:String,
    subtitle2:String,
    title2:String,
    subtitle3:String,
    title3:String,
    subtitle4:String,
    subtitle5:String,
    subtitle6:String,


})

module.exports=mongoose.model("introductions",Introduction);