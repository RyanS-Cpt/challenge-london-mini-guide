const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("You made it here, well done!");
})

const listener = app.listen(process.env.PORT);
console.log(listener.address().port);