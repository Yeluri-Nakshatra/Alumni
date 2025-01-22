import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router'
import GetInvolved from './Pages/GetInvolved/GetInvolved'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Header from './shared/header'
import Footer from './shared/Footer/Footer'
import EventsPage from './Pages/Events/EventsPage'
import Contact from "./Pages/Contact/Contact";


const App = () => {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/home" element={<Home />} />
      <Route path="/getinvolved" element={<GetInvolved />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/Contact" element={<Contact />} />


     

    </Routes>
    <Footer/>
  </Router>
  
  )
}

export default App