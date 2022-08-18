const { response } = require("express");
const express = require("express");
const Detail = require("../models/Detail")
const Image = require("../models/Image")
const Introduction = require("../models/Introduction")
const Form = require("../models/Form");
const Epay = require("../models/Epay");
const Andriod = require("../models/Andriod");
const Ios = require("../models/Ios");
const Flutter = require("../models/Flutter");
const Woocommerce = require("../models/Woocommerce");
const Tokenpayment = require("../models/Tokenpayment")

const routes=express.Router();

routes.get("/",async(req,res)=>{
  const details = await Detail.findOne({"_id":"62f87cb4cbbb5bc7f0f30dd1"})
  const images = await Image.find()
  const introductions = await Introduction.find()
//   console.log(introductions)
//   console.log(images)
  
    res.render("index",{
        details:details,
        images:images,
        introductions:introductions
    })
});

routes.get("/epay",async(req,res)=>{
    const details = await Detail.findOne({"_id":"62f87cb4cbbb5bc7f0f30dd1"})
    const epays= await Epay.find()
    
    
    res.render("epay",{
        details:details,
        epays:epays
    })
})

routes.get("/andriod",async(req,res)=>{
    const details = await Detail.findOne({"_id":"62f87cb4cbbb5bc7f0f30dd1"})
    const andriods = await Andriod.find()

    res.render("andriod",{
        details:details,
        andriods:andriods
    })
})

routes.get("/flutter",async(req,res)=>{
    const details = await Detail.findOne({"_id":"62f87cb4cbbb5bc7f0f30dd1"})
    const flutters = await Flutter.find()

    res.render("flutter",{
        details:details,
        flutters:flutters
    })
})

routes.get("/ios",async(req,res)=>{
    const details = await Detail.findOne({"_id":"62f87cb4cbbb5bc7f0f30dd1"})
    const ios = await Ios.find()

    res.render("ios",{
        details:details,
        ios:ios
    })
})

routes.get("/tokenpayment",async(req,res)=>{
    const details = await Detail.findOne({"_id":"62f87cb4cbbb5bc7f0f30dd1"})
    const tokenpayments = await Tokenpayment.find()

    res.render("tokenpayment",{
        details:details,
        tokenpayments:tokenpayments
    })
})

routes.get("/woocommerce",async(req,res)=>{
    const details = await Detail.findOne({"_id":"62f87cb4cbbb5bc7f0f30dd1"})
    const woocommerces = await Woocommerce.find()

    res.render("woocommerce",{
        details:details,
        woocommerces:woocommerces
    })
})


routes.post("/signup-form",async(req,res)=>{
    console.log("form is submited")
    console.log(req.body)
    try{
        const data =await Form.create(req.body)
       
        res.redirect("/")

    }
    catch(e){
        console.log(e)
        res.redirect("/")
    }
})
module.exports = routes