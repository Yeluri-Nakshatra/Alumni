import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './shared/header'
import Footer from './shared/Footer/Footer'
import GetInvolved from './Pages/GetInvolved/GetInvolved'
import Home from './Pages/Home/Home'
import About from "./Pages/About/About";
const App = () => {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/GetInvolved" element={<GetInvolved />} />
      <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App