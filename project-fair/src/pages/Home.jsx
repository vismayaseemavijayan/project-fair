
import React, { useEffect, useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import titleImage from '../assets/images/first.gif'
import Projectcard from '../components/Projectcard'
import { Link, useNavigate } from 'react-router-dom'
import { getHomeProjectAPI } from '../../services/allAPI'


function Home() {
  const[loggedIn,setloggedIn]=useState(false)
  const navigate=useNavigate()

const[projects,setprojects]=useState([])

const getHomeProject=async()=>{
  const result = await getHomeProjectAPI()
  if(result.status == 200){
    setprojects(result.data)
  }else{
    setprojects([])
  }
}
console.log(projects);


  useEffect(()=>{
    getHomeProject();
    if(sessionStorage.getItem("token")){
      setloggedIn(true)
    }else{
      setloggedIn(false)
    }
},[])
const handleprojectspage=()=>{
  if(sessionStorage.getItem("token")){
    navigate("/projects")
  }else{
    alert("please login")
  }
}

  return (
    <>
     <div style={{width:"100%",height:"100vh"}} className='container-fluid rounded bg-blue' >
    <Row className="align-items-center p-5">
        <Col sm={12} md={6}>
        <h1 style={{fontSize:'80px'}} className='fw-bolder text-light'><i className='fa-solid fa-list-check me-2'></i>Project-Fair</h1>
        <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id saepe dolor voluptatem, illo corrupti. Nam in quam quaerat nemo maxime itaque autem expedita ea at dolore ab, nobis sequi.</p>
        {loggedIn?<Link to={'/dashboard'} className="btn btn-warning">Manage Your Projects</Link>
        :<Link to={'/login'} className="btn btn-warning">Start To Explore</Link>}
        </Col>
        <Col sm={12} md={6}>
         <img width={'500px'} src={titleImage} alt='title'/>
        </Col>
    </Row>

     </div>

     {/* projects */}
     <div className='all-projects mt-5'>
        <h1 className='text-center bg-primary'>explore your projects</h1>
        <marquee scrollAmount={25}>
        <Row>
          {projects.length>0?projects.map((project,index)=>(
        <Col key={index} sm={12} md={6} lg={4}>
        <Projectcard project={project}/>
        </Col>
          )):null
        }
        
        </Row>
        </marquee>
     
     <div className='text-center mt-5'>
      {/* <Link to={'/Projects'} style={{textDecoration:"none",color:"red"}}>view more projects</Link></div> */}
      <button className='btn' style={{textdecoration:"none",color:"yellow"}} onClick={handleprojectspage}>View More Projects</button>
     </div>
     </div>
    </>
  )
}

export default Home
