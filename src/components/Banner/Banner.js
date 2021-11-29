import { Button } from 'bootstrap'
import React from 'react'
import './Banner.css'

export default function Banner() {
   return (
      <div className=" banner" style={{ background: '#f9f9ff' }}>
         <div className=" p-0 m-0 row justify-content-center align-items-center">
            <div className="col-md-6 col-12 p-0 m-0">
               <div className="col-sm-8 col-12 mx-auto me-md-0 ms-md-auto p-md-0 p-3">
                  <small
                     style={{ letterSpacing: '2px', color: 'rgb(34, 34, 34)' }}
                  >
                     THIS IS ME
                  </small>
                  <h3
                     className="my-4"
                     style={{
                        fontSize: '3rem',
                        fontWeight: '600',
                        color: 'rgb(34, 34, 34)',
                        letterSpacing: '1px',
                     }}
                  >
                     MD. ZAHIN UDDIN
                  </h3>
                  <p
                     className=""
                     style={{
                        lineHeight: '1.625em',
                        color: '#777',
                        fontSize: '14px',
                        fontWeight: '300',
                     }}
                  >
                     To work in a competitive yet comfortable setting where I
                     can use my abilities to the organization's progress while
                     also working on self-improvement.
                  </p>
                  <a
                     target="_blank"
                     rel="noreferrer"
                     href="https://drive.google.com/file/d/1wICTtfl1jDpWtmGwptSpStEpCogmN_0h/view?usp=sharing"
                  >
                     
                     <button className="text-capilize">Download Resume</button>
                  </a>
               </div>
            </div>
            <div className="col-md-6 col-12 p-5  ">
               <div className="col-sm-9 col-12 mx-auto ">
                  <img
                     className="img-fluid mx-auto"
                     src="/images/00.JPG"
                     alt="mee"
                  />
               </div>
            </div>
         </div>
      </div>
   )
}
