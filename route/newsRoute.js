const express = require("express")

const {getdata}=require("../controller/newsController")

const route = express.Router()



route.use("/news", getdata)

module.exports=route