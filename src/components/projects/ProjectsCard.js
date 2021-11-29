import React, { useEffect } from 'react'
import { Card, Col } from 'react-bootstrap'
import './card.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
               <Card.Title>{name}</Card.Title>
               <Card.Text>{details}</Card.Text>
            </Card.Body>
            <Card.Footer>
               <button>Details</button>
            </Card.Footer>
         </Card>
      </Col>
   )
}
