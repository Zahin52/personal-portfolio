import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Blog() {
   return (
      <div
         className="d-flex justify-content-center align-items-center"
         style={{ height: 'calc(100vh - 10rem)' }}
      >
         <h3>
            <Typewriter
               options={{
                  autoStart: true,
                  loop: true,
               }}
               onInit={(typewriter) => {
                  typewriter
                     .pauseFor(400)
                     .typeString('I\'m still working on this part')
                     .pauseFor(300)
                     .deleteAll()
                     .typeString('Blog is coming soon....')
                     .pauseFor(1000)
                     .start()
               }}
            />
         </h3>
      </div>
   )
}
