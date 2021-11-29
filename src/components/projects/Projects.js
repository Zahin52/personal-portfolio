import React from 'react'
import { Row } from 'react-bootstrap'
import ProjectCard from './ProjectsCard'

export default function Projects() {
   const Project = [
      {
         name: 'shadeHouse',
         details: 'sell sun glass and various shades',
         image: '/images/shadehouse.png',
      },

      {
         name: 'Destino',
         details: 'sell travel package',
         image: '/images/Destino.png',
      },
      {
         name: 'Gentle care',
         details: 'Health care',
         image: '/images/gentleCare.png',
      },
   ]
   return (
      <div className="" style={{ margin: '10em 0 5em 0' }}>
         <div className="d-flex justify-content-center align-items-center">
            <h3 className="text-capitalize fs-1" style={{ fontWeight: '600' }}>
               Explore My Projects
            </h3>
         </div>
         <div className="row justify-content-center align-items-center">
            <Row xs={1} md={3} className="g-4 p-5">
               {Project.map((item, idx) => (
                  <ProjectCard key={idx} info={item} />
               ))}
            </Row>
         </div>
      </div>
   )
}
