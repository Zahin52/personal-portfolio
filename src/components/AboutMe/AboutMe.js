import React, { useEffect } from 'react'
import "./AboutMe.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AboutMe() {
   useEffect(() => {
      AOS.init()
   }, [])
   return (
      <div className="" style={{ margin: '10rem 0 12rem 0' }}>
         <div className="row g-4 justify-content-center align-items-center">
            <div
               data-aos="fade-left"
               data-aos-easing="linear"
               data-aos-duration="500"
               className="col-lg-5 col-12"
            >
               <div className="d-flex justify-content-center align-items-center ">
                  <img
                     className="img-fluid col-8 mx-auto border rounded-circle"
                     src="/images/meWithkid.jpg"
                     alt="my standing"
                  />
               </div>
            </div>
            <div
               data-aos="fade-right"
               data-aos-easing="linear"
               data-aos-duration="500"
               className="col-lg-7 col-12 aboutMe"
               
            >
               <div>
                  <p className="text-danger my-2">Who am I ?</p>
                  <h4 className="text-uppercase">
                     I'm Md. Zahin Uddin, a full stack & MERN stack Web Devloper
                  </h4>
                  <p
                     className="text-secondary"
                     style={{
                        textAlign: 'justify',
                     }}
                  >
                     I am a final-year undergraduate student at the University
                     of Chittagong studying Computer Science and Engineering. As
                     a C.S.E student, I had the opportunity to investigate a
                     wide range of fascinating elements of computer science.
                     <br />I have most loved web development and am looking for
                     possibilities to contribute my abilities to the growth of a
                     company and an atmosphere that will allow me to grow and
                     learn every day.
                  </p>
               </div>
               <hr />
               <div className="d-md-flex justify-content-between">
                  <div>
                     <div className="d-flex">
                        <span className="me-2 fw-bold">Name</span>
                        <p>Md. Zahin Uddin</p>
                     </div>
                     <div className="d-flex">
                        <span className="me-2 fw-bold">Age</span>
                        <p>24</p>
                     </div>
                  </div>
                  <div>
                     <div className="d-flex">
                        <span className="me-2 fw-bold">Email</span>
                        <p>zahinuddin5@gmail.com</p>
                     </div>
                     <div className="d-flex">
                        <span className="me-2 fw-bold">From</span>
                        <p>Dhaka, Bangladesh</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
