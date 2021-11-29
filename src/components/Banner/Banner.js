
import React, { useEffect } from 'react'
import './Banner.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Typewriter from 'typewriter-effect'

export default function Banner() {
   useEffect(() => {
      AOS.init()
   }, [])
   return (
      <div className=" banner" style={{ background: '#f9f9ff' }}>
         <div className=" p-0 m-0 row justify-content-center align-items-center">
            <div className="col-md-6 col-12 p-0 m-0">
               <div className="col-sm-8 col-12 mx-auto me-md-0 ms-md-auto p-md-0 p-3">
                  <small
                     data-aos="fade-down"
                     data-aos-easing="linear"
                     data-aos-duration="500"
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
                     <Typewriter
                        options={{
                           autoStart: true,
                        }}
                        onInit={(typewriter) => {
                           typewriter
                              .pauseFor(400)
                              .typeString('MD. zahin')
                              .pauseFor(300)
                              .deleteChars(5)
                              .typeString('ZAHIN ')
                              .typeString('UDDIN')
                              .pauseFor(1000)
                              .start()
                        }}
                     />
                  </h3>
                  <p
                     className=""
                     style={{
                        lineHeight: '1.625em',
                        color: '#777',
                        fontSize: '1.2rem',
                        fontWeight: '400',
                     }}
                  >
                     Full Stack Developer
                     <wbr /> || React Developer <wbr /> || MERN Developer
                  </p>
                  {/* <a
                     className="me-2"
                     download
                     target="_blank"
                     rel="noreferrer"
                     href="/files/Zahin_uddin_Resume.pdf"
                  >
                     <button className="text-capilize">Download Resume</button>
                  </a> */}
                  <a
                     className=""
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
                     data-aos="fade-up"
                     className="img-fluid mx-auto"
                     src="/images/me.png"
                     alt="mee"
                  />
               </div>
            </div>
         </div>
      </div>
   )
}
