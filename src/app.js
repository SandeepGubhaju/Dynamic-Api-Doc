const express = require("express");
const { route } = require("./routes/main");
const hbs = require("hbs");


const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

const routes = require("./routes/main")
const Detail = require("./models/Detail")
const Image  = require("./models/Image")
const Introduction = require("./models/Introduction")
const Form = require("./models/Form")
const Epay = require("./models/Epay")
const Andriod = require("./models/Andriod");
const Ios = require("./models/Ios");
const Flutter = require("./models/Flutter");
const Woocommerce = require("./models/Woocommerce");
const Tokenpayment = require("./models/Tokenpayment");


app.use(bodyParser.urlencoded({
    extended:true
}))
app.use("/static",express.static("public"))
app.use("",routes);



//template engine

app.set("view engine","hbs")
app.set("views","views")
hbs.registerPartials("views/partials")


//db connection

mongoose.connect("mongodb://localhost/esewa_doc",()=>{
    console.log("db connected")

    // Tokenpayment.create({
    //     header1:"Overview",
    //     para1:"API, an abbreviation of Application Program Interface, is a set of routines, protocols, and tools for building software applications. The API specifies how software components should interact. Virtually all software has to request other software to do some things for it. To accomplish this, the asking program uses a set of standardized requests, called Application Programming Interface (API). Building an application with no APIs is basically like building a house with no doors. The API for all computing purposes is how we open the blinds and the doors and exchange information.",
    //     para2:"This documentation is about Token based payment in eSewa. This helps to understand and guide those partners which are intended to integrate token based payment. Token based payment implies, a unique token is generated at the merchant end. Customer enters the token at eSewa for payment, and then request is made to the client against the token generated from merchant. Upon getting the necessary information in response, payment is made from eSewa in next step. This documentation will help to accelerate the integration efforts of client application with eSewa.",
    //     image:"/static/images/tokenImage.png",
    //     para3:"The scenario visualized in above figure shows an overall communication from partner/client’s Server to eSewa and finally to the partner/client’s Server. Number in bracket specifies the order of process that is carried out between partner client and eSewa. Following lays the explanation: "
    // })

    // Woocommerce.create([{
    //     header1:"Overview",
    //     para1:"This is WooCommerce plugin for eSewa payment gateway.",
    //     header2:"1. Installation",
    //     para2:"The basic steps to follow:",
    //     list1:"Go to the plugin section in your WordPress admin dashboard",
    //     list2:"Search eSewa Pvt. Ltd. and install.",
    //     image1:"/static/images/wooImg1.png",
    //     list3:"After installation is complete, go to WooCommerce > Settings",
    //     list4:"Go to Payments option where you can find eSewa among other payment gateways Click on eSewa option and enter your keys in respective fields.",
    //     image2:"/static/images/wooImg2.png"
    // }])

    // Flutter.create([{
    //     header1:"Overview",
    //     para1:"The​ ​ eSewa​ ​ Mobile​ ​ SDK​ ​ enable​ ​ to​ ​ easily​ ​ accept​ ​ eSewa​ ​ payments. The​ ​ SDK​ ​ supports​ ​ only​ ​ one​ ​ use​ ​ case​ ​ for​ ​ making​ ​ payment​ –​ Single​ ​Payment​ ​(i.e.​ ​ One​ ​ payment​ ​ per​ ​ one​ ​ user​ ​ log​ ​in).",
    //     header2:"INSTRUCTIONS",
    //     para2:"Clients can download the sdk from this drive link.",
    //     para3:"IMPORTANT: Please make sure your flutter project is migrated to dart sound null safety feature.",
    //     list1:"1. Extract the zip",
    //     list2:"2. Copy esewa_flutter_sdk folder to the root of your project",
    //     list3:"3. Add the sdk path in pubspec.yaml dependencies as follows and run flutter pub get command in terminal:",
    //     para4:"dependencies:",
    //     para5:"flutter:",
    //     para6:"sdk: flutter",
    //     para7:"sewa_flutter_sdk:",
    //     para8:"path: ./esewa_flutter_sdk"
    // }])

    // Ios.create([{
    //     header1:"Overview",
    //     para1:"The​ ​ eSewa​ ​ Mobile​ ​ SDK​ ​ enable​ ​ native​ ​ iOS (swift) ​ to​ ​ easily​ ​ accept​ ​ eSewa​ ​ payments. The​ ​ SDK​ ​ supports​ ​ only​ ​ one​ ​ use​ ​ case​ ​ for​ ​ making​ ​ payment​ –​ Single​ ​Payment​ ​(i.e.​ ​ One​ ​ payment​ ​ per​ ​ one​ ​ user​ ​ log​ ​in).",
    //     header2:"Transaction​ ​ Flow",
    //     list1:"Client Mobile Application initiates eSewa payment procedure by sending their cliend_id and client_secret along with product/service name, product/service price, product_id and callback-url to sdk.",
    //     list2:"SDK sends merchant’s credentials to eSewa.",
    //     list3:"eSewa verifies merchant credentials and sends merchant authentication token on successful verification.",
    //     list4:"SDK sends customer credentials to eSewa.",
    //     list5:"eSewa sends customer identifier along with name and balance to SDK.",
    //     list6:"SDK sends payment request to eSewa if balance is sufficient for payment.",
    //     list7:"In case of successful payment eSewa sends proof of payment to SDK and to client application server.",
    //     list8:"SDK forwards proof of payment to client mobile application.",
    //     list9:"Final verification procedure is strongly recommended before product/service delivery.",
    //     list10:"Deliver Product/Service to customer.",
    //     background1para1:"client_id​ ​ and​ ​ client_secret​​ ​ values​ ​ are​ ​ provided​ ​ by​ ​ eSewa​ ​ to​ ​ its​ ​merchant/client and is unique for each. For development phase, you can use the following credentials:",
    //     background1para2:"client_id: JB0BBQ4aD0UqIThFJwAKBgAXEUkEGQUBBAwdOgABHD4DChwUAB0R",
    //     background1para3:"client_secret: BhwIWQQADhIYSxILExMcAgFXFhcOBwAKBgAXEQ==",
    //     background2para:"Note : After login, if the device stays ideal for more than 5 minutes before confirming the payment, the particular session will be time out and customer have to re-initiate the payment process.",
    //     header3:"System Interaction",
    //     img:"/static/images/andriod.png",
    //     subtitle:"The interactions required to complete a transaction followed by verification process are shown below:"

        
    // }])



    // Andriod.create([{
    //     header1:"Overview",
    //     para1:"The esewa Mobile SDK enable native andriod to easily accept payments. The SDK supports only one use case for making payment - single payment(i.e one payment per one user log in).",
    //     header2:"Transaction​ ​ Flow",
    //     list1:"Client Mobile Application initiates eSewa payment procedure by sending their cliend_id and client_secret along with product/service name, product/service price, product_id and callback-url to sdk.",
    //     list2:"SDK sends merchant’s credentials to eSewa.",
    //     list3:"eSewa verifies merchant credentials and sends merchant authentication token on successful verification.",
    //     list4:"SDK sends customer credentials to eSewa.",
    //     list5:"eSewa sends customer identifier along with name and balance to SDK.",
    //     list6:"SDK sends payment request to eSewa if balance is sufficient for payment.",
    //     list7:"In case of successful payment eSewa sends proof of payment to SDK and to client application server.",
    //     list8:"SDK forwards proof of payment to client mobile application.",
    //     list9:"Final verification procedure is strongly recommended before product/service delivery.",
    //     list10:"Deliver Product/Service to customer.",
    //     background1para1:"client_id​ ​ and​ ​ client_secret​​ ​ values​ ​ are​ ​ provided​ ​ by​ ​ eSewa​ ​ to​ ​ its​ ​merchant/client and is unique for each. For development phase, you can use the following credentials:",
    //     background1para2:"client_id: JB0BBQ4aD0UqIThFJwAKBgAXEUkEGQUBBAwdOgABHD4DChwUAB0R",
    //     background1para3:"client_secret: BhwIWQQADhIYSxILExMcAgFXFhcOBwAKBgAXEQ==",
    //     background2para:"Note : After login, if the device stays ideal for more than 5 minutes before confirming the payment, the particular session will be time out and customer have to re-initiate the payment process.",
    //     header3:"System Interaction",
    //     img:"/static/images/andriod.png",
    //     subtitle:"The interactions required to complete a transaction followed by verification process are shown below:"

    // }])

    // Epay.create([{
    //     title1:"Overview",
    //     subtitle1:"The eSewa ePay system enables partner merchant to perform transaction and receive money from customer having eSewa account in secure environment.",
    //     title2:"Transaction Flow",
        
    //     subtitle4:"By confirming the transaction, user is accepting the transaction details sent by partner merchants.",
    //     subtitle5:"After each successful transaction, the user is redirected back to partner merchant’s success page. If transaction fails due to any reason (which includes user canceling transaction), the user is informed by appropriate failure message and redirected back to partner merchant’s failure page.",
    //     subtitle6:"For every successful transaction, the merchant account is credited accordingly and notified via email/SMS regarding transaction.",
    //     subtitle7:"eSewa application will automatically notifies partner merchant related to eSewa transaction through Instant Payment Notification (IPN).",
    //     subtitle8:"Partner merchants need to invoke transaction verification request to verify potential fraudulent transactions occurre",
    //     subtitle9:"eSewa application will automatically notifies partner merchant with either success or failure response.",
    //     title3:"System Interaction",
    //     subtitle10:"The interactions required to complete a transaction followed by transaction verification process are shown below:",
    //     imgUrl:"/static/images/apiDiagram.png",
    //     subtitle2:"When user choses eSewa as on-line payment option from partner merchant application, then user is temporarily redirected to eSewa ePay login page.",
    //     subtitle3:"User will provide valid credentials on login page."
        
    // }])

    // Introduction.create([{
    //     title1:"Introduction",
    //     subtitle1:"Welcome to eSewa Payment API documentation.",
    //     subtitle2:"eSewa enables customer to make payment from associated merchant application in secure environment. The payment​ ​amount is​ deposited into​ their eSewa wallet or bank account.",
    //     title2:"Whom this is for",
    //     subtitle3:"Business house and Organization interested on adding online payment facilities to their system and provide a value added to customers.",
    //     title3:"Intent of Document",
    //     subtitle4:"This document is intended for partners merchant seeking to integrate and transact with the eSewa. This document can used as a reference in the planning, building, and deploying of applications wishing to integrate eSewa payment system. Contained within are specific implementation details concerning general guidelines, transaction flow and validation process which all partner applications should adhere to. This information should help accelerate the integration efforts of eSewa payment system with merchant application.",
    //     subtitle5:"This document does not necessarily define specific ways to implement the guidelines and procedures contained within. Vendor, platform, and architectural considerations may influence the manner in which individual systems comply.",
    //     subtitle6:"The focus of this document is to detail how partner applications establish connectivity to eSewa and outline the transaction process with or without verification process. A full and detailed description of the transactions and associated data elements is included."


        

    // }])
    
    // Image.create([{
        
    //     title:"PAY, SEND & RECEIVE",
    //     subtitle1:"Nepal's 1st Payment Service Provider Licensed By NRB.",
    //     subtitle2:"API Documentation1.0",
    //     subtitle3:"Welcome to the eSewa payment gateway developer hub. You'll find the detailed guides and documentation.",
    //     imageUrl:"/static/images/esewa-logo.png"


    // }])
//     Detail.create({
//         brandIconUrl:"https://techlekh.com/wp-content/uploads/2017/06/esewa-logo.png",
//         links:[{
//             label:"index",
//             url:"/"
//         },
//     {
//         label:"Epay",
//         url:"epay"

//     },
//     {
//         label:"Andriod",
//         url:"/andriod"
//     },
//     {
//         label:"IOS",
//         url:"/ios"
//     },
//     {
//         label:"Flutter",
//         url:"/flutter"
//     },
//     {
//         label:"WooCommerce",
//         url:"/woocommerce"
//     },
//     {
//         lable:"TokenPayment",
//         url:"/tokenpayment"
//     }
// ]
//     })
})


app.listen(process.env.PORT | 3000,()=>{
    console.log("Server started sucessfully at port no 3000")
})