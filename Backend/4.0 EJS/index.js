import bodyParser from "body-parser";
import express from "express";

const app=express();
const port=3000;


app.listen(port,()=>{
    console.log(`server running on ${port}..`);
});

app.get("/", (req,res)=>{
    const today = new Date();
    const day = today.getDay();

  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("index.ejs",{
    type:type,
    adv:adv
  });

});