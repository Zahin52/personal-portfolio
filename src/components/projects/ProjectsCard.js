import React, { useEffect } from 'react'
import { Card, Col } from 'react-bootstrap'
import './card.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

export default function ProjectsCard({ info }) {
   const { name, details, image, entry } = info
   useEffect(() => {
      AOS.init()
   }, [])
   return (
      <Col
         className="cards"
         data-aos={entry}
         data-aos-offset="80"
         data-aos-delay="5"
         data-aos-duration="500"
         data-aos-easing="ease-in"
      >
         <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
               <Card.Title className="text-uppercase">{name}</Card.Title>
               <Card.Text className="text-secondary">{details}</Card.Text>
            </Card.Body>
            <Card.Footer>
               <Link to={`/projects/${name}`}>
                  <button>See Details</button>
               </Link>
            </Card.Footer>
         </Card>
      </Col>
   )
}
