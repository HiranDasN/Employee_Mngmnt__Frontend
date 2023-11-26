import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
    <Navbar expand="lg" className="container-fluid" style={{ backgroundColor: '#1e253e', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <Navbar.Brand><Link to={'/'} style={{textDecoration:'none'}}>
        <h1 style={{ fontFamily: 'Montserrat', fontWeight: 'bold', marginLeft: '40px', color: '#fff' }}>EngageWith</h1>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/" style={{ fontSize: "15px", marginLeft: '15px', fontWeight: 'bold', color: '#fff' }}>HOME</Nav.Link>
          <Nav.Link href="/employee" style={{ fontSize: "15px", marginLeft: '10px', fontWeight: 'bold', color: '#fff' }}>EMPLOYEE</Nav.Link>
          <Nav.Link href="/contact" style={{ fontSize: "15px", marginLeft: '15px', fontWeight: 'bold', color: '#fff' }}>CONTACT</Nav.Link>
          <Nav.Link href="" style={{ fontSize: "15px", marginLeft: '25px', fontWeight: 'bold', color: '#fff' }}></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

        </>
    )
}

export default Header