
import Home from './Pages/Home/Home'
const App = () => {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/GetInvolved" element={<GetInvolved />} />
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App