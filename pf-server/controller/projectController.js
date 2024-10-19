const projects=require("../Models/projectSchema")

// add projects
exports.addProjects=async(req,res)=>{
    console.log("inside add project");
    const{title,language,github,website,overview}=req.body
    const projectImage=req.file.filename
    const userId=req.payload
    // console.log(title,language,github,website,overview,projectImage,userId);
    try{
        const existingProject=await projects.findOne({github})
        if(existingProject){
            res.status(406).json("project already exist in our collection... please add another one")
        }else{
            const newProject= new projects({title,language,github,website,overview,projectImage,userId})
            await newProject.save()
            res.status(200).json(newProject)
        }

    }catch(err){
        res.status(401).json(err)
    }
}
// getHomeProjects
exports.getHomeProjects=async(req,res)=>{
    try{
      const allProjects = await projects.find().limit(3)
      res.status(200).json(allProjects)
    }
    catch(error){
     res.status(401).json(error)
    }
    
}

// getUserProjects
exports.getUserProjects=async(req,res)=>{
    const userId = req.payload
    try{
      const userProjects = await projects.find({userId})
      res.status(200).json(userProjects)
    }
    catch(error){
     res.status(401).json(error)
    }
    
}

// getAllprojects
exports.getAllProjects=async(req,res)=>{
    try{
      const allProjects = await projects.find()
      res.status(200).json(allProjects)
    }
    catch(error){
     res.status(401).json(error)
    }
    
}

    
    // res.status(200).json("add project request received")
    

