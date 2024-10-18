const express = require("express");
const app = express();
const port = 4008;

var name=require("./routes/name");
var age=require("./routes/age");
var phno=require("./routes/phno");
var email=require("./routes/email")
var message=require("./routes/message")

app.use("/age",age);
app.use("/name",name);
app.use("/phno",phno);
app.use("/email",email);
app.use("/message",message);

app.listen(port, () => {
  console.log("Listening to port" + port);
})
