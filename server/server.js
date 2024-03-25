if(process.env.NODE_ENV!="production"){
    require("dotenv").config()
}

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bookRouter = require("./routes/bookRoutes");


let app = express();
let PORT = process.env.PORT


//db
async function db(){
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("db connected")
}
db()

app.use(express.json())

app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))


app.get('/',(req,res)=>{
    console.log(req)
    return res.status(234).send('WElcome to MERN Stack Tutorial')
})

app.use("/books",bookRouter);



app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})
