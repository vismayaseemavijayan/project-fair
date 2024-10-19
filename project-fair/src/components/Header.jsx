import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Navbar className='bg-info'>
        <Container>
            <Navbar.Brand>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}><i className='fa-solid fa-list-check me-2'></i></Link>
            </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
