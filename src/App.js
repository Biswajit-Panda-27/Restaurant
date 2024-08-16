import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Banner from './components/Banner';
import WhyChoose from './components/WhyChoose';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Popup from './Shared/Popup';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const [showPopup, setShowPopup] = useState(false);
  const HandlePopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
    

}, []);

return (
  <>

    <div className='overflow-x-hidden'>

    </div>
    <Navbar HandlePopup={HandlePopup} />
    <Hero />
    <Banner />
    <WhyChoose />
    <AboutUs />
    <ContactUs />
    <Popup showPopup={showPopup} setShowPopup={setShowPopup} />

  </>
);
}

export default App;
