import React, { useRef, useState } from 'react'
import { Form, Row, Col, FloatingLabel } from 'react-bootstrap'
import emailjs from 'emailjs-com'
import './contactForm.css'

export default function ContactForm() {
   const [FormData, setFormData] = useState({
      name: '',
      email: '',
      mobile: '',
      comment: '',
   })
   const [SuccShow, setSuccShow] = useState(false)
   const [errorShow, seterrorShow] = useState(false)
   const form = useRef()
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

      const flag = Object.values(FormData).filter((item) => item.length === 0)
      console.log(FormData, form.current, flag)
      if (flag.length !== 0) {
         seterrorShow(true)

         return setTimeout(() => {
            seterrorShow(false)
         }, 5000)
      }
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
               setSuccShow(true)
               setFormData({
                  name: '',
                  email: '',
                  mobile: '',
                  comment: '',
               })
               setTimeout(() => {
                  setSuccShow(false)
               }, 5000)
            },
            (error) => {
               console.log(error.text)
               seterrorShow(true)
               setTimeout(() => {
                  seterrorShow(false)
               }, 5000)
            },
         )
      e.target.reset()
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
               {SuccShow && (
                  <div className="alert alert-success" role="alert">
                     Submitted Succesfully, Will contact you soon!
                  </div>
               )}
               {errorShow && (
                  <div className="alert alert-danger" role="alert">
                     Please fill all the fields or check your inputs!
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}
