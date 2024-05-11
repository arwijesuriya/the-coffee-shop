import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Navbar/Home';

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App