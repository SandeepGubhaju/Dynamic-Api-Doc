const mongoose = require("mongoose");
const Woocommerce = mongoose.Schema({
    header1:String,
    para1:String,
    header2:String,
    para2:String,
    list1:String,
    list2:String,
    image1:String,
    list3:String,
    list4:String,
    image2:String
})

module.exports = mongoose.model("woocommerce",Woocommerce);