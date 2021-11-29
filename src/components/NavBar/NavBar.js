import React from 'react'
import {
   Button,
   Container,
   Form,
   FormControl,
   Nav,
   Navbar,
   NavDropdown,
} from 'react-bootstrap'

export default function NavBar() {
   return (
      <Navbar className="bg-white mt-3" expand="lg" sticky="top">
         <Container fluid className="mx-5">
            <Navbar.Brand className="fw-bold fs-3 d-flex just" href="#">
               <img
                  className="img-fluid"
                  style={{ width: '3rem' }}
                  src="/images/image.png"
                  alt="logo"
               />
               <span style={{ color: '#000', marginLeft: '-25px' }}>
                  ZAHIN UDDIN
               </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav
                  className="ms-auto my-2 my-lg-0"
                  style={{ maxHeight: '200px' }}
                  navbarScroll
               >
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}
