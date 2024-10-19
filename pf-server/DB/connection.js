const mongoose=require('mongoose')
const connectionString=process.env.connectionString

mongoose.connect(connectionString).then(()=>{
    console.log("mongodb atlas successfully connected to pf server");
    
}).catch((err)=>{
    console.log("mongodb connection failed",err);
    
})