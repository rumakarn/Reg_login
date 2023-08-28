const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/backendRegForm").then(()=>{
    console.log("connection established")
}).catch((err)=>{
    console.log(err);
})