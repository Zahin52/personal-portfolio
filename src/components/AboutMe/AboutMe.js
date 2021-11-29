import React from 'react'

export default function AboutMe() {
   return (
      <div className="my-5">
         <div className="row g-4 justify-content-center align-items-center">
            <div className="col-md-6 col-12">
               <div className="d-flex justify-content-center align-items-center">
                  <img
                     className="img-fluid col-8 mx-auto"
                     src="/images/abMe.png"
                     alt="my standing"
                  />
               </div>
            </div>
            <div
               className="col-md-6 col-12 "
               style={{ padding: '2rem 12rem 2rem 4rem',textAlign: "justify" }}
            >
               <div>
                  <h4 className="text-uppercase">About Me</h4>
                  <p className="">
                     I am a final-year undergraduate student at the University
                     of Chittagong studying Computer Science and Engineering. As
                     a C.S.E student, I had the opportunity to investigate a
                     wide range of fascinating elements of computer science.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}
