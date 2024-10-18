var express =require("express");
var router=express.Router();

router.post("/Create-phno",(req,res)=>{
    res.send("phno is created");
})

router.get("/get-phno",(req,res)=>{
    res.send("phno is send");
})

router.put("/update-phno",(req,res)=>{
    res.send("phno is updated");
})

router.delete("/delete-phno",(req,res)=>{
    res.send("phno is delete");
})

module.exports=router;