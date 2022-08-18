const mongoose = require("mongoose");
const Epay =mongoose.Schema({
    title1:String,
    subtitle1:String,
    title2:String,
    subtitle2:String,
    subtitle3:String,
    subtitle4:String,
    subtitle5:String,
    subtitle6:String,
    subtitle7:String,
    subtitle8:String,
    subtitle9:String,
    title3:String,
    subtitle10:String,
    imgUrl:String

})

module.exports = mongoose.model("epays",Epay)