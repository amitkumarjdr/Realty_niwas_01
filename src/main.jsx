import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Location from './pages/Location.jsx'
import PricePage from './pages/PricePage.jsx'
import Specification from './pages/Specification.jsx'
import MasterPlan from './pages/MasterPlan.jsx'
import Amenities from './pages/Amenities.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Gallery from './pages/Gallery.jsx'
import DummyGallery from './pages/Amenities.jsx'
import Contact from './pages/Contact.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Location /> 
    <PricePage />
    <Specification />
     <MasterPlan />
    <Amenities />
    <Gallery />
    <Contact />
   
  </React.StrictMode>,
)
