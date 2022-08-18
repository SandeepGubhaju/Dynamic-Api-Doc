const mongoose = require("mongoose");
const Andriod = mongoose.Schema({
    header1:String,
    para1:String,
    header2:String,
    list1:String,
    list2:String,
    list3:String,
    list4:String,
    list5:String,
    list6:String,
    list7:String,
    list8:String,
    list9:String,
    list10:String,
    backgroun1para1:String,
    background1para2:String,
    backgroun1para3:String,
    backgroun2para:String,
    header3:String,
    img:String,
    subtitle:String



})

module.exports = mongoose.model("andriods",Andriod)