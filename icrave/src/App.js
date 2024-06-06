import React from 'react'
import Navbar from './Components/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Carosel from './Components/Carosel'
import Cards from './Components/Cards'
import Footer from './Components/Footer'


export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Carosel/>
        <Cards/>
        <Footer/>
      </Router>
    </>
  )
}
