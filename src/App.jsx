
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
import Signin from './Pages/Signin.jsx'
import Signup from './Pages/Signup.jsx'
import Logout from "./Pages/Logout.jsx"
import ScrollToTop from 'react-scroll-to-top'
import JobDetails from './Pages/JobDetails.jsx'
import AddResumes from "./Pages/AddResumes.jsx"
import Applications from "./Pages/Applications.jsx"
import Bookmarks from "./Pages/Bookmarks.jsx"
import Dashboard from "./Pages/Dashboard.jsx"
import JobAlerts from "./Pages/JobAlerts.jsx"
import ManageResumes from "./Pages/ManageResumes.jsx"
import Messages from "./Pages/Messages.jsx"
import MyProfile from "./Pages/MyProfile.jsx"
import SubmitJob from "./Pages/SubmitJob.jsx"
import AddCompany from "./Pages/AddCompany.jsx"
import Packages from "./Pages/Packages.jsx"
// import { getDatabase , ref ,set } from "firebase/database" 
// import {app} from "./context/Firebase/FirebaseConfig.jsx"
// import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth"
// import DashboardLayout from './Pages/DashboardLayout.jsx'

// const DB = getDatabase(app)
// const auth = getAuth(app)

function App() {

//   const signUp = ()=>{
//     createUserWithEmailAndPassword(auth,"sonu@gmail.com","Sonu@123")
//     .then((res)=>{
//       console.log(res)
//     })

//   }

  // const putData = ()=>{
  //   set(ref(DB, "/users/sonu") , {
  //     id :1,
  //     name: "sonu pandey",
  //     age:21
  //   })
  // }

  return (
    <>
      <Navbar />
      {/* <button onClick={signUp}>SignUp</button> */}
      {/* <button onClick={putData}>Put Data into firebase</button> */}
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='findjob'>
            <Route index element={<FindJob />} />
            {/* <Route path=':jobId' >

              <Route index element={<JobDetails />} />
              <Route path=':new' element={<h1>new</h1>} />

            </Route> */}
          </Route>
          <Route path='/job' element={<JobDetails />} />
          <Route path='companys' element={<Companys />} />
          <Route path='candidate' element={<Candidate />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='contact' element={<ContactUs />} />
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
          <Route path='logout' element={<Logout />} />
          <Route path='*' element={<Page404 />} />
          {/* dropdown routing */}
          <Route path='dashboard' >
          
            <Route index element={<Dashboard />} />
            
            <Route path='messages' element={<Messages />} />
            <Route path='job-alerts' element={<JobAlerts />} />
            <Route path='manage-resumes' element={<ManageResumes />} />
            <Route path='add-resumes' element={<AddResumes />} />
            <Route path='my-profile' element={<MyProfile />} />
            <Route path='bookmarks' element={<Bookmarks />} />
            <Route path='applications' element={<Applications />} />
            <Route path='managesJobs' element={<Applications />} />
            <Route path='managesCompanys' element={<Applications />} />
            <Route path='submit-job' element={<SubmitJob/>} />
            <Route path='add-company' element={<AddCompany />} />
            <Route path='packages' element={<Packages/>} />
          </Route>


        </Route>
      </Routes>
      {/* <Footer /> */}
      {/* for PWA  */}
      <PWABadge />
      <ScrollToTop color='blue' smooth />
    </>
  )
}

export default App
