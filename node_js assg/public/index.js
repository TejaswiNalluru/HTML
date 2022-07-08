const express=require('express')
const router =express.Router()

router.get('/',(req,res)=>{
    res.send("hello from router folder")
})

router.get('/home',(req,res)=>{
    res.render()
})