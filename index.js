const express=require('express')
const app = express()
let port=process.env.PORT||5000


app.get('/',(req,res)=>{
    res.send("Hello I am Pownraj")
})

app.listen(port,()=>{
    console.log(`Server starts at port ${port}`)
})