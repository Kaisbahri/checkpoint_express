const express=require("express")
const res = require("express/lib/response")
const router=express.Router()
router.get("/services",(req,res)=>{
    res.render("our_services")
})

router.get("/Contact",(req,res)=>{
    res.render("contact_us")
})