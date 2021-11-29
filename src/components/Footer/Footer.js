import React from 'react'

export default function Footer() {
   return (
      <div className="p-5 bg-dark text-white">
         <div className="row justify-content-between">
            <div className="col-md-4 col-12">
               <h3 className="text-capitalize my-2">About Me</h3>
               <p>
                  I am a final-year undergraduate student at the University of
                  Chittagong studying Computer Science and Engineering. As a
                  C.S.E student, I had the opportunity to investigate a wide
                  range of fascinating elements of computer science.
               </p>
            </div>
            <div className="col-md-4 col-12">
               <h3 className="text-capitalize my-2">Follow Me</h3>
               <div className="">
                  <a
                     target="_blank"
                     rel="noreferrer"
                     href="https://github.com/Zahin52"
                     className="mx-2 text-white"
                  >
                     <i className="fab fa-github fa-2x"></i>
                  </a>
                  <a
                     target="_blank"
                     rel="noreferrer"
                     href="https://www.linkedin.com/in/md-zahin-uddin-0301361b4"
                     className="mx-2 text-white"
                  >
                     <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                  <a
                     target="_blank"
                     rel="noreferrer"
                     href="https://www.facebook.com/zahin.uddin/"
                     className="mx-2 text-white"
                  >
                     <i className="fab fa-facebook fa-2x"></i>
                  </a>
               </div>
            </div>
         </div>
         <hr />
         <div className="text-center">Copyright &copy; MD. ZAHIN UDDIN</div>
      </div>
   )
}
