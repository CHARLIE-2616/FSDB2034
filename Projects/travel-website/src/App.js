import React from 'react'
import './app.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Header'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App