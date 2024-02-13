import express from "express";
import axios from "axios";
const app=express();
const port=3000;

app.use(express.static('public'));
app.get("/",async(req,res)=>{
    try{
    const response=await axios.get(" https://riddles-api.vercel.app/random");
    console.log(response.data);
    const resultRiddle=response.data.riddle;
    const resultAnswer=response.data.answer;

    res.render("index.ejs",{riddle:resultRiddle, answer:resultAnswer});
    }catch(error){
        res.render("index.ejs",{riddle:JSON.stringify(error.response.data),answer:JSON.stringify(error.response.data)});
        res.status(500);
    }
});


app.get("/newRiddle",(req,res)=>{
    res.redirect("/");
});


app.listen(port,()=>{console.log(`listening on port ${port}`)});
