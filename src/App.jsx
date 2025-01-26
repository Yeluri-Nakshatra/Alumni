import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router'
import GetInvolved from './Pages/GetInvolved/GetInvolved'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Header from './shared/header'
import Footer from './shared/Footer/Footer'
import EventsPage from './Pages/Events/EventsPage'
import Contact from "./Pages/Contact/Contact";
import Login from './Components/Login'
import Register from './Components/Register'
import Notifications from './Components/Notifications'
import Alumni_Directory from './Pages/News&Blogs/Alumni_Directory/Alumni_Directory'
import Alumni_News from './Pages/updates/alumni_news/Alumni_News'
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
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/notifications' element={<Notifications/>}/>
      <Route path='/alumnidirectory' element={<Alumni_Directory/>}/>

      <Route path='/alumni_news' element={<Alumni_News/>}/>
    </Routes>
    <Footer/>
  </Router>
 

  
  
  )
}

export default App