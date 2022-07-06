const express =require('express')

const app=express()
app.get('/json',(req,res,next)=>{
    const data={
        Name:'Tejaswi'
    }
    res.json(data)
})
app.listen(3000)