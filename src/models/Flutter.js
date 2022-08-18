const mongoose = require("mongoose");
const Flutter = mongoose.Schema({
    header1:String,
    para1:String,
    header2:String,
    para2:String,
    para3:String,
    list1:String,
    list2:String,
    list3:String,
    para4:String,
    para5:String,
    para6:String,
    para7:String,
    para8:String
})

module.exports = mongoose.model("flutters",Flutter)