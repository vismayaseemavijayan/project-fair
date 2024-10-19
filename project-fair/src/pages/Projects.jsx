import React from 'react'
import Projectcard from '../components/Projectcard'
import Header from '../components/Header'
import {Row, Col} from 'react-bootstrap'

function Projects() {
  return (
    <div>
    <Header/>
    <div className='Projects' style={{marginTop:"100px"}}>
        <h1 className='text-center mt-5 fw-bolder'>all projects</h1>
        <div className='d-flex justify-content-center align-items-center w-100'>
        <div className='d-flex border w-50 rounded mb-3'>
            <input type='text' className='form-control' placeholder='search by technologies'/>
            <i style={{marginLeft:'-50px'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
        </div>
        </div>
    <Row className="mt-5 container">
        <Col sm={12} md={6} lg={4}>
        <Projectcard/>
        </Col>
    </Row>
    </div>

      
    </div>
  )
}

export default Projects
