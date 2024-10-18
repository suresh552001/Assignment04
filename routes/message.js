var express =require("express");
var router=express.Router();

router.post("/Create-message",(req,res)=>{
    res.send("message is created");
})

router.get("/get-message",(req,res)=>{
    res.send("message is send");
})

router.put("/update-message",(req,res)=>{
    res.send("message is updated");
})

router.delete("/delete-message",(req,res)=>{
    res.send("message is delete");
})

module.exports=router;