import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
import './index.css'
import 'font-awesome/css/font-awesome.min.css'             

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Body/>
    <Footer />
  </React.StrictMode>,
)
