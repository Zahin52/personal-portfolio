import React from 'react'
import { Form, Row, Col, FloatingLabel } from 'react-bootstrap'
import './contactForm.css'

export default function ContactForm() {
   return (
      <div className="my-5">
         <div className="fs-1 text-center" style={{ fontWeight: '600' }}>
            Contact Me
         </div>
         <div className="row p-5 justify-content-center align-items-center">
            <div className="col-md-8 col-12">
               <Form>
                  <Row className="g-2">
                     <Col md className="mb-3">
                        <FloatingLabel controlId="floatingInput" label="Name">
                           <Form.Control type="text" placeholder="ex: zahin" />
                        </FloatingLabel>
                     </Col>
                     <Col md className="mb-3">
                        <FloatingLabel
                           controlId="floatingPassword"
                           label="Mobile"
                        >
                           <Form.Control
                              type="text"
                              placeholder="ex: +880144.."
                           />
                        </FloatingLabel>
                     </Col>
                  </Row>
                  <FloatingLabel
                     controlId="floatingInput"
                     label="Email address"
                     className="mb-3"
                  >
                     <Form.Control
                        type="email"
                        placeholder="name@example.com"
                     />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                     <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                     />
                  </FloatingLabel>
                  <div className="formButton my-3">
                     <button className="text-capilize">Send</button>
                  </div>
               </Form>
            </div>
         </div>
      </div>
   )
}
