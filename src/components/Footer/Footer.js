import React from 'react'

export default function Footer() {
   return (
      <div className="p-5 bg-dark text-white">
         <div className="row justify-content-between">
            <div className="col-md-4 col-12">
               <h3 className="text-capitalize my-2">Have a question?</h3>
               <div className="d-flex">
                  <span className="me-2">
                     <i className="fas fa-map"></i>
                  </span>
                  <p>Dhaka, Bangladesh</p>
               </div>
               <div className="d-flex">
                  <span className="me-2">
                     <i className="fas fa-phone-alt"></i>
                  </span>
                  <p>+8801864511733</p>
               </div>
               <div className="d-flex">
                  <span className="me-2">
                     <i className="fab fa-telegram-plane"></i>
                  </span>
                  <p>zahinuddin5@gmail.com</p>
               </div>
            </div>
            <div className="col-md-4 col-12 d-md-flex  justify-content-center">
               <div className="">
                  <h3 className="text-capitalize my-2 ">Services</h3>
                  <div className="">
                     <div className="d-flex">
                        <span className="me-2">
                           <i className="fas fa-arrow-right"></i>
                        </span>
                        <p>Web development</p>
                     </div>
                     <div className="d-flex">
                        <span className="me-2">
                           <i className="fas fa-arrow-right"></i>
                        </span>
                        <p>MERN stack development</p>
                     </div>
                     <div className="d-flex">
                        <span className="me-2">
                           <i className="fas fa-arrow-right"></i>
                        </span>
                        <p>Responsive design</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-4 col-12 d-md-flex  justify-content-center">
               <div>
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
         </div>
         <hr />
         <div className="text-center">Copyright &copy; MD. ZAHIN UDDIN</div>
      </div>
   )
}
