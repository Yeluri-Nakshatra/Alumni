import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './shared/header'
import Footer from './shared/Footer/Footer'
import GetInvolved from './Pages/GetInvolved/GetInvolved'
import Home from './Pages/Home/Home'
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/GetInvolved" element={<GetInvolved />} />
    </Routes>
  </Router>
  )
}

export default App