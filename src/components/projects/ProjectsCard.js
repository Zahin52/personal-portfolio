import React from 'react'
import { Card, Col } from 'react-bootstrap'
import './card.css'

export default function ProjectsCard({ info }) {
   const { name, details, image } = info
   return (
      <Col className="cards">
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
