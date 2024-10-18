var express =require("express");
var router=express.Router();

router.post("/Create-age",(req,res)=>{
    res.send("age is created");
})

router.get("/get-age",(req,res)=>{
    res.send("age is send");
})

router.put("/update-age",(req,res)=>{
    res.send("age is updated");
})

router.delete("/delete-age",(req,res)=>{
    res.send("age is delete");
})

module.exports=router;