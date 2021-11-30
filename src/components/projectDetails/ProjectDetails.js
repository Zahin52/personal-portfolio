import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './productDetails.css'
export default function ProjectDetails() {
   const Project = [
      {
         name: 'shadeHouse',
         details: 'sell sun glass and various shades',
         bulletPoint: [
            'Sunglass selling website',
            'Users can Order product',
            'Users can Cancle their orders',
            'Google and Email authentication needed to get some extra privilage',
            'If you are an admin you can make an admin',
            'Admin users can mange orders',
            'Normal users can give review',
         ],
         screenShots: [
            '/images/projects/shadehouse/1.png',
            '/images/projects/shadehouse/2.png',
            '/images/projects/shadehouse/3.png',
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
         details: 'sell travel package',
         bulletPoint: [
            'Sunglass selling website',
            'Users can Order product',
            'Users can Cancle their orders',
            'Google and Email authentication needed to get some extra privilage',
            'If you are an admin you can make an admin',
            'Admin users can mange orders',
            'Normal users can give review',
         ],
         screenShots: [
            '/images/projects/destino/1.png',
            '/images/projects/destino/2.png',
            '/images/projects/destino/3.png',
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
         details: 'Health care',
         bulletPoint: [
            'We sell high quality sunglasses',
            'Users can Order product',
            'Users can Cancle their orders',
            'Google and Email authentication needed to get some extra privilage',
            'If you are an admin you can make an admin',
            'Admin users can manage all orders',
            'Normal users can give review',
         ],
         screenShots: [
            '/images/projects/shadehouse/1.png',
            '/images/projects/shadehouse/2.png',
            '/images/projects/shadehouse/3.png',
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
      <div className="container text-secondary p-5">
         <h1 className="my-3">{displayItem.name}</h1>
         <div className="link-button">
            <button className="ms-0 m-2">Live Site</button>
            <button className="ms-0 m-2">Front-End Code</button>
            <button className="ms-0 me-0 m-2">Back-End Code</button>
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
