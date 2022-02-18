const express=require('express')
const app = express()
let port=process.env.PORT||5000


app.get('/',(req,res)=>{
    res.send("Hello I am Pownraj Auto Deployment")
})

app.get('/hello',(req,res)=>{
    res.send("Hello world")
})


app.listen(port,()=>{
    console.log(`Server starts at port ${port}`)
})