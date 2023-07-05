import React from 'react'
import Navbar from './comp/Navbar'
import Hero from './comp/Hero'
import About from './comp/About'
import Project from './comp/Project'
import Review from './comp/Review'
import Footer from './comp/Footer'

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Review />
      <Footer />
    </div>
  )
}
