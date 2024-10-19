const express=require('express')
const router=express.Router()
const usercontroller=require('../controller/userController')
const projectController=require('../controller/projectController')
const jwtMiddleWare=require("../Middleware/jwtMiddleWare")
const multerConfig=require('../Middleware/multerMiddleware')
//register
router.post('/register',usercontroller.register)
//login
router.post('/login',usercontroller.login)
// add project
router.post('/addproject',jwtMiddleWare,multerConfig.single('projectImage'),projectController.addProjects)
// homeproject
router.get('/homeproject',projectController.getHomeProjects)
// userproject
router.get("/userproject",jwtMiddleWare,projectController.getUserProjects)
// all projects
router.get("/allprojects",jwtMiddleWare,projectController.getAllProjects)

module.exports=router