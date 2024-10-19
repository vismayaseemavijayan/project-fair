import React from 'react'
import Header from '../components/Header'
import {Col, Row} from 'react-bootstrap'
import Profile from '../components/Profile'
import Myprojects from '../components/Myprojects'


function Dashboard() {
  return (
    <div>
     <Header/>
     <Row>
     {/* my projects */}
     <Col sm={12} md={8}>
     <h2>welcome <span className='text-warnin fw-bolder'>user</span></h2>
     <Myprojects/>
     </Col>
     {/* profile */}
     <Col sm={12} md={4}>
     <Profile/>

     </Col>
     </Row>
    </div>
  )
}

export default Dashboard
