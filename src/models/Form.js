const mongoose = require("mongoose")
const Form =mongoose.Schema({
    email:String,
    request:String,
    fName:String,
    mobile:String,
    address:String,
    oName:String,
    oWeb:String,
    organizationCatogory:String,
    cPan:String,
    message:String
})
module.exports = mongoose.model("forms",Form)