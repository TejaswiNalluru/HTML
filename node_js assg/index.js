const express =require("express");

const app=express();
const path=require('path')
app.use(express.static(path.join(__dirname,'public')))

app.get('/registration',(req,res)=>{
    res.sendFile(__dirname+"/views/registration.html");
})

app.get('/',(req,res,next)=>{
    res.send('Hello')
})


app.listen(3000)