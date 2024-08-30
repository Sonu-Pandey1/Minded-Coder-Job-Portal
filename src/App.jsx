
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Home from './Pages/Home.jsx'
import FindJob from './Pages/FindJob.jsx'
import Companys from './Pages/Companys.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import PWABadge from './PWABadge.jsx'
import Candidate from './Pages/Candidate.jsx'
import Page404 from "./Pages/Page404.jsx"
import './App.css'
import Footer from './Components/Footer.jsx'
import Signin from './Pages/Signin.jsx'
import Signup from './Pages/Signup.jsx'
import ScrollToTop from 'react-scroll-to-top'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='findjob' element={<FindJob/>}/>
          <Route path='companys' element={<Companys/>}/>
          <Route path='candidate' element={<Candidate/>}/>
          <Route path='about' element={<AboutUs/>}/>
          <Route path='contact' element={<ContactUs/>}/>
          <Route path='signin' element={<Signin/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='*' element={<Page404/>}/>
        </Route>
      </Routes>
      <Footer/>
      {/* for PWA  */}
      <PWABadge />
      <ScrollToTop color='blue' smooth />
    </>
  )
}

export default App
