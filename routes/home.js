const express = require("express");
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('HomePage');
    res.render("index",{
        pageTitle:"Home",
        path:"/"
    })
})

exports.router=router;