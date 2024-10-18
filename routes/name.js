var express =require("express");
var router=express.Router();

router.post("/Create-name",(req,res)=>{
    res.send("name is created");
})

router.get("/get-name",(req,res)=>{
    res.send("name is send");
})

router.put("/update-name",(req,res)=>{
    res.send("name is updated");
})

router.delete("/delete-name",(req,res)=>{
    res.send("name is delete");
})

module.exports=router;