const express =require("express");
const app=express();
const router =express.Router()

router.get('/registration',(req,res)=>{
    res.sendFile(__dirname+"/views/registration.html");
})

app.get('/',(req,res,next)=>{
    res.send('Hello from router file')
})

router.get('/json',(req,res,next)=>{
    const data={
        Name:'Tejaswi'
    }
    res.json(data)
})