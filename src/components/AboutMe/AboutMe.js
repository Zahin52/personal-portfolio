import React, { useEffect } from 'react'
import './AboutMe.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AboutMe() {
   useEffect(() => {
      AOS.init()
   }, [])
   return (
      <div
         className=""
         style={{ margin: '12rem 0 12rem 0', overflowX: 'hidden !important' }}
      >
         <div
            className="row g-4 justify-content-center align-items-center"
            style={{ overflowX: 'hidden !important' }}
         >
            <div
               data-aos="fade-up"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               className="col-lg-5 col-12"
               style={{ overflowX: 'hidden !important' }}
            >
               <div
                  className="d-flex justify-content-center align-items-center "
                  style={{ overflowX: 'hidden !important' }}
               >
                  <img
                     className="img-fluid col-10 mx-auto  rounded-circle"
                     src="/images/photo.jpg"
                     alt="my standing"
                  />
               </div>
            </div>
            <div
               data-aos="fade-down"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               className="col-lg-7 col-12 aboutMe"
               style={{ overflowX: 'hidden !important' }}
            >
               <div style={{ overflowX: 'hidden !important' }}>
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
                     I am a final-year undergraduate student studying Computer
                     Science and Engineering at the University of Chittagong. As
                     a C.S.E student, I was able to examine a wide range of
                     exciting computer science aspects.
                     <br />
                     I've always enjoyed web development and am searching for
                     opportunities to contribute my skills to a company's growth
                     as well as an environment that will allow me to grow and
                     learn every day.
                  </p>
               </div>
               <hr />
               <div className="d-md-flex justify-content-between">
                  <div>
                     <div className="d-flex">
                        <span className="me-2 fw-bold">Name : </span>
                        <p>Md. Zahin Uddin</p>
                     </div>
                     <div className="d-flex">
                        <span className="me-2 fw-bold">Age : </span>
                        <p>24</p>
                     </div>
                  </div>
                  <div>
                     <div className="d-flex">
                        <span className="me-2 fw-bold">Email : </span>
                        <p>zahinuddin5@gmail.com</p>
                     </div>
                     <div className="d-flex">
                        <span className="me-2 fw-bold">From : </span>
                        <p>Dhaka, Bangladesh</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
