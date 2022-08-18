const mongoose = require("mongoose");

const Image = mongoose.Schema({
    title:String,
    subtitle1:String,
    subtitle2:String,
    subtitle3:String,
    imageUrl:String
    
})
module.exports = mongoose.model("images",Image)