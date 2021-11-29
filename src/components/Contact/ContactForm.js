import React, { useRef, useState } from 'react'
import { Form, Row, Col, FloatingLabel } from 'react-bootstrap'
import emailjs from 'emailjs-com'
import './contactForm.css'

export default function ContactForm() {
    const [FormData, setFormData] = useState({})
    const form=useRef()
   const FormHandle = (e) => {
      const name = e.target.name
      const val = e.target.value
      const data = FormData
      data[name] = val
      setFormData(data)
      console.log(FormData)
   }
   const submitForm = (e) => {
      e.preventDefault()

      emailjs
         .sendForm(
            'gmail',
            'template_bx65y9f',
            form.current,
            'user_FOgXvzCP9UEHDQq5HFSkM',
         )
         .then(
            (result) => {
               console.log(result.text)
            },
            (error) => {
               console.log(error.text)
            },
         )
   }
   return (
      <div className="my-5">
         <div className="fs-1 text-center" style={{ fontWeight: '600' }}>
            Contact Me
         </div>
         <div className="row p-5 justify-content-center align-items-center">
            <div className="col-md-8 col-12">
               <Form ref={form} onSubmit={(e) => submitForm(e)}>
                  <Row className="g-2">
                     <Col md className="mb-3">
                        <FloatingLabel controlId="floatingInput" label="Name">
                           <Form.Control
                              name="name"
                              type="text"
                              placeholder="ex: zahin"
                              onBlur={(e) => FormHandle(e)}
                           />
                        </FloatingLabel>
                     </Col>
                     <Col md className="mb-3">
                        <FloatingLabel
                           controlId="floatingPassword"
                           label="Mobile"
                        >
                           <Form.Control
                              type="text"
                              name="mobile"
                              placeholder="ex: +880144.."
                              onBlur={(e) => FormHandle(e)}
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
                        name="email"
                        placeholder="name@example.com"
                        onBlur={(e) => FormHandle(e)}
                     />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                     <Form.Control
                        as="textarea"
                        name="comment"
                        placeholder="Leave a comment here"
                        onBlur={(e) => FormHandle(e)}
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
