// loads .env file contents ingto process.env by default
//require("dotenv").config()
const express = require('express')
const cors = require('cors')
const router=require('./Router/router')
require('./DB/connection')
const pfserver = express()

pfserver.use(cors())
pfserver.use(express.json())
pfserver.use(router)
pfserver.use('/uploads',express.static('./uploads'))

const PORT = 3000
pfserver.listen(PORT,()=>{
    console.log(`pfserver started at port:${PORT}`);
    
})
pfserver.get('/',(req,res)=>{
    res.status(200).send('<h1 style=color:red>file started running & waiting for the client request</h1>')
})