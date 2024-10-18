var express =require("express");
var router=express.Router();

router.post("/Create-email",(req,res)=>{
    res.send("email is created");
})

router.get("/get-email",(req,res)=>{
    res.send("email is send");
})

router.put("/update-email",(req,res)=>{
    res.send("email is updated");
})

router.delete("/delete-email",(req,res)=>{
    res.send("email is delete");
})

module.exports=router;