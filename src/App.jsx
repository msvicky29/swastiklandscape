import React from 'react'
import NavBar from './components/NavBar'
import Info from './components/Info'
import Footer from './components/Footer'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Service from './components/Service'
import GreenRoof from './components/GreenRoof'
import VerticalGarden from './components/VerticalGarden'
import {Routes,Route} from 'react-router-dom'
import EventPlant from './components/EventPlant'
import Irrigation from './components/Irrigation'

const App = () => {
  return (
    <div>
     <NavBar/>
     <Routes>
      <Route path='/' element={<Info/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/green-roof' element={<GreenRoof/>}/>
      <Route path='/vertical-garden' element={<VerticalGarden/>}/>
      <Route path='/event-plant' element={<EventPlant/>}/>
      <Route path='/irrigation' element={<Irrigation/>}/>
     </Routes>
     {/* <Home/> */}  
     <Footer/>
    </div>
  )
}

export default App
