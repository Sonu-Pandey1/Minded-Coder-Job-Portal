import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter } from 'react-router-dom'
// import connectDB from '../lib/db/index.js'
import { SignupProvider } from "./context/signupContext.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignupProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </SignupProvider>

  </React.StrictMode>,
)


// require('dotenv').config({path:'./env'})

// connectDB()