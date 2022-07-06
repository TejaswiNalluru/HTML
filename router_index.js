const express=require('express')
const app=express();

const indexRouter=require('./router/index')

app.use('/',indexRouter)
app.listen(3000)