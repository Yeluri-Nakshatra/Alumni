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
import Alumni_Directory from './Pages/Alumni/Alumni_Directory/Alumni_Directory'
import Error from './Pages/Error/Error404'
import Register from './Components/Register'
import Notifications from './Components/Notifications'
import AlumniAssociation from './Pages/About/AlumniAssociation/AlumniAssociation'
import Chapter from './Pages/Events/Chapter/Chapter'
import CoreTeam from './Pages/About/CoreTeam/CoreTeam'
import Alumni_News from './Pages/updates/alumni_news/Alumni_News'
import StudentVolunteers from './Pages/About/StudentVolunteers/StudentVolunteers'
import WebTeam from './Pages/About/WebTeam/WebTeam'
import Gallery from './Pages/About/Gallery/Gallery'
import EventCalender from './Pages/Events/EventCalender/EventCalender'
import Reunion from './Pages/Events/Reunion/Reunion'
import Sponserships from './Pages/Events/Sponserships/Sponserships'
import MentorShip from './Pages/Alumni/MentorShip/MentorShip'
import Workshops from './Pages/Alumni/Workshops/Workshops'
import AlumniTalks from './Pages/Alumni/AlumniTalks/AlumniTalks'
import SmartId from './Pages/Alumni/SmartId/SmartId'
import NewsLetter from './Pages/updates/NewsLetter/NewsLetter'
import Awards from './Pages/updates/Awards/Awards'
import Donate from './Pages/GetInvolved/Donate/Donate'
import Contribute from './Pages/GetInvolved/Contribute/Contribute'
import Jobs from './Pages/updates/Jobs/Jobs'
import Donation from './Pages/Donation/Donation'
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
      {/* <Route path='/login' element={<Login/>}/> */}
      <Route path='/register' element={<Register/>}/>
      <Route path='/donation' element={<Donation/>}/>
      <Route path='/notifications' element={<Notifications/>}/>
      <Route path='/alumni_directory' element={<Alumni_Directory/>}/>
      <Route path='/chapters' element={<Chapter/>}/>
      <Route path='/alumni_news' element={<Alumni_News/>}/>
      <Route path='/alumni_association' element={<AlumniAssociation/>}/>
      <Route path='/core_team' element={<CoreTeam/>}/>
      <Route path='/student_volunteers' element={<StudentVolunteers/>}/>
      <Route path='/web_team' element={<WebTeam/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/event_calender' element={<EventCalender/>}/>
      <Route path='/reunion' element={<Reunion/>}/>
      <Route path='/sponserships' element={<Sponserships/>}/>
      
      <Route path='/donate' element={<Donate/>}/>
      <Route path='/mentor_ship' element={<MentorShip/>}/>
      <Route path='/workshops' element={<Workshops/>}/>
      <Route path='/alumni_talks' element={<AlumniTalks/>}/>
      <Route path='/smartid' element={<SmartId/>}/>
      <Route path='/news_letter' element={<NewsLetter/>}/>
      <Route path='/awards' element={<Awards/>}/>
      <Route path='/donate' element={<Donate/>}/>
      <Route path='/contribute' element={<Contribute/>}/>
      <Route path='/jobs' element={<Jobs/>}/>
      <Route path='*' element={<Error />}/>
    </Routes>
    <Footer/>
  </Router>
 

  
  
  )
}

export default App