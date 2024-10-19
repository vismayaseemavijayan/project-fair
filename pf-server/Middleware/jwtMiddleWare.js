const jwt=require('jsonwebtoken')

const jwtMiddleWare=(req,res,next)=>{
    console.log("inside jwtMiddleWare");
    try{
    const token=req.headers["authorization"].split(" ")[1]
    //console.log(token);
    if(token){
        const jwtResponse=jwt.verify(token,process.env.jwt_secret)
        req.payload=jwtResponse.userId
        next()
        
    }else{
        res.status(401).json("please provide token")
    }

}catch{
    res.status(403).json("please login")
}
    
    
}
module.exports=jwtMiddleWare