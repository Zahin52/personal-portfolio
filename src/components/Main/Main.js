import React from 'react'
import Banner from '../Banner/Banner'
import './Main.css'
import Projects from '../projects/Projects'
import ContactForm from '../Contact/ContactForm'
import Footer from '../Footer/Footer'
import AboutMe from '../AboutMe/AboutMe'

export default function Main() {
   return (
      <div>
         <div id="home">
            <Banner />
         </div>
         <div id="aboutme">
            <AboutMe />
         </div>
         <div id="projects">
            <Projects />
         </div>
         <div id="contact">
            <ContactForm />
         </div>
         <div>
            <Footer />
         </div>
      </div>
   )
}
