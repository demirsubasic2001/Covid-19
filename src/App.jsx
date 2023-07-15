import React from 'react'
import './App.css'
import WorldSection from './miniComponents/WorldSection'
import Footer from './components/Footer/footer'
import Home from './components/Home'
import CovidStats from './components/CovidStats'
import CountryStats from './components/CountryStats'
import AboutUs from './components/AboutUs'
import Navbar from './components/Home/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CoutryStats from './components/CountryStats'

function App() {

  return (
    
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/covidstats' element={<CovidStats />}/>
      <Route path='/countrystats' element={<CountryStats />}></Route>
      <Route path='/aboutus' element={<AboutUs />}></Route>
    </Routes>
  
    
    </>
  )
}

export default App
