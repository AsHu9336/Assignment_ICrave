import React from 'react'
import Navbar from './Components/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  )
}
