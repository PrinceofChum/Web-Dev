import express from "express";
var app = express();
var port = 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Vanakkam! </h1>");
});

app.get("/testuh",(req,res)=>{
    res.send("<h1>Working Broo!.. </h1>");
});

app.listen(port, ()=>{
    console.log(`Server running on ${port}..`);
});