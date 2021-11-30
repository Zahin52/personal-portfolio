import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './productDetails.css'
export default function ProjectDetails() {
   const Project = [
      {
         name: 'shadeHouse',
         details: 'A best Sunglass shop online',
         bulletPoint: [
            'A Sunglass selling website',
            'Users can order product',
            'Users can cancle their orders',
            'Google and Email authentication needed to get some extra privilage',
            'If you are an admin you can make an admin',
            'Admin users can manage all orders',
            'Normal users can give review',
         ],
         screenShots: [
            '/images/projects/shadehouse/01.png',
            '/images/projects/shadehouse/02.png',
            '/images/projects/shadehouse/03.png',
         ],
         liveSite: 'https://shadehouse-d69c2.firebaseapp.com/',
         FrontEnd:
            'https://github.com/Zahin52/shadehouse/tree/main/shadehouse%20client',
         BackEnd:
            'https://github.com/Zahin52/shadehouse/tree/main/shadehouse%20server',
         image: '/images/shadehouse.png',
         entry: 'fade-down-right',
      },

      {
         name: 'Destino',
         details: 'A best Travel and tourism website',
         bulletPoint: [
            "It's a Travel & Tourism website",
            'Users can book a place where they want to travel',
            'Users can cancle their Bookings',
            'Google and Email authentication needed to get special privilage',
            'User also can add a destination they want to go',
         ],
         screenShots: [
            '/images/projects/destino/01.png',
            '/images/projects/destino/02.png',
            '/images/projects/destino/03.png',
         ],
         liveSite: 'https://destino-7072b.web.app/',
         FrontEnd:
            'https://github.com/Zahin52/Destino/tree/main/Destino-client',
         BackEnd: 'https://github.com/Zahin52/Destino/tree/main/Destino-server',
         image: '/images/Destino.png',
         entry: 'fade-up',
      },
      {
         name: 'Gentle-care',
         details: 'A Health care website',
         bulletPoint: [
            'A Health care related website',
            'User can see the test type and details',
            'Google and Email authentication needed to get some extra privilage',
            'After login user can fix an appointment',
            'After login user also can give feedback',
         ],
         screenShots: [
            '/images/projects/gentleCare/1.png',
            '/images/projects/gentleCare/2.png',
            '/images/projects/gentleCare/3.png',
         ],
         liveSite: 'https://gentle-care.web.app/',
         FrontEnd:
            'https://github.com/Zahin52/gentle-care/tree/main/gentle-care',
         BackEnd: '',
         image: '/images/gentleCare.png',
         entry: 'fade-down-left',
      },
   ]
   const { name } = useParams()
   const displayItem = Project.filter((Item) => Item.name === name)[0]
   console.log(displayItem)

   return (
      <div className="container text-secondary py-4">
         <h1 className="my-3">{displayItem.name}</h1>
         <div className="link-button">
            <a target="_blank" rel="noreferrer" href={displayItem.liveSite}>
               <button className="ms-0 m-2">Live Site</button>
            </a>
            <a target="_blank" rel="noreferrer" href={displayItem.FrontEnd}>
               <button className="ms-0 m-2">Front-End Code</button>
            </a>
            <a target="_blank" rel="noreferrer" href={displayItem.BackEnd}>
               <button className="ms-0 me-0 m-2">Back-End Code</button>
            </a>
         </div>
         <div className="d-md-flex">
            <Carousel variant="dark" className="col-lg-6 col-12">
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={displayItem.screenShots[0]}
                     alt="First slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={displayItem.screenShots[1]}
                     alt="Second slide"
                  />
               </Carousel.Item>
               <Carousel.Item className="text-secondary">
                  <img
                     className="d-block w-100"
                     src={displayItem.screenShots[2]}
                     alt="Third slide"
                  />
               </Carousel.Item>
            </Carousel>
            <div className="col-lg-6 col-12 d-lg-flex justify-content-center">
               <div className="p-3">
                  <h3>Features</h3>
                  <ul>
                     {displayItem.bulletPoint.map((items, idx) => (
                        <li key={idx}> {items}</li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}
