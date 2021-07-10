const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    
})

const listener = app.listen(process.env.port);
console.log(listener.address().port);