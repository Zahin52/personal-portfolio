import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import ProjectCard from './ProjectsCard'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Projects() {
   const Project = [
      {
         name: 'shadeHouse',
         details: 'A best Sunglass shop online',
         FrontEnd:
            'https://github.com/Zahin52/shadehouse/tree/main/shadehouse%20client',
         BackEnd:
            'https://github.com/Zahin52/shadehouse/tree/main/shadehouse%20server',
         image: '/images/shadehouse.png',
         entry: 'fade-down',
      },

      {
         name: 'Destino',
         details: 'A best Travel and tourism website',
         FrontEnd:
            'https://github.com/Zahin52/Destino/tree/main/Destino-client',
         BackEnd: 'https://github.com/Zahin52/Destino/tree/main/Destino-server',
         image: '/images/Destino.png',
         entry: 'fade-up',
      },
      {
         name: 'Gentle-care',
         details: 'A Health care website',
         FrontEnd:
            'https://github.com/Zahin52/gentle-care/tree/main/gentle-care',
         BackEnd: '',
         image: '/images/gentleCare.png',
         entry: 'fade-down',
      },
   ]
   useEffect(() => {
      AOS.init()
   }, [])
   return (
      <div
         className=""
         style={{ margin: '9rem 0 5rem 0', overflowX: 'hidden' }}
      >
         <div
            className="d-flex justify-content-center align-items-center pt-5"
            style={{ overflowX: 'hidden !important' }}
         >
            <h3
               data-aos="fade-down"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               className="text-capitalize fs-1"
               style={{ fontWeight: '600' }}
            >
               Explore My Projects
            </h3>
         </div>
         <div
            className="row justify-content-center align-items-center"
            style={{ overflowX: 'hidden !important' }}
         >
            <Row xs={1} md={3} className="g-4 p-5">
               {Project.map((item, idx) => (
                  <ProjectCard key={idx} info={item} />
               ))}
            </Row>
         </div>
      </div>
   )
}
