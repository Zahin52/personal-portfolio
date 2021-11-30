import React from 'react'
import './nav.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'

export default function NavBar() {
   return (
      <Navbar className="bg-white mt-3 " expand="lg" sticky="top">
         <Container fluid className="mx-2 mx-md-5">
            <Navbar.Brand className="fw-bold fs-3 d-flex " href="#">
               <img
                  className="img-fluid rounded-circle"
                  style={{ width: '1.3em' }}
                  src="/images/logo.png"
                  alt="logo"
               />
               <span
                  style={{
                     fontSize: '1.6rem',
                     color: 'rgb(108, 117, 125)',
                     
                  }}
               >
                  ZAHIN UDDIN
               </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav
                  className="ms-auto my-2 my-lg-0 nav"
                  style={{ maxHeight: '200px' }}
                  navbarScroll
               >
                  <Nav.Link as={NavHashLink} to="/#">
                     Home
                  </Nav.Link>
                  <Nav.Link
                     as={NavHashLink}
                     smooth
                     scroll={(el) =>
                        el.scrollIntoView({ behavior: 'smooth', block: 'end' })
                     }
                     to="/#projects"
                  >
                     Projects
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/blog">
                     Blog
                  </Nav.Link>
                  <Nav.Link
                     as={NavHashLink}
                     smooth
                     scroll={(el) =>
                        el.scrollIntoView({
                           behavior: 'smooth',
                           block: 'center',
                        })
                     }
                     to="/#aboutme"
                  >
                     About Me
                  </Nav.Link>

                  <Nav.Link
                     as={NavHashLink}
                     smooth
                     scroll={(el) =>
                        el.scrollIntoView({ behavior: 'smooth', block: 'end' })
                     }
                     to="/#contact"
                  >
                     Contact
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}
