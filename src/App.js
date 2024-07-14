import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Features from './Components/Features/Features';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/Contact/Contact';

function App() {
  const [currentLocation, setCurrentLocation] = useState('');

  console.log(currentLocation); // You can remove this or replace it with more sophisticated logging if needed

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/features" element={<Features setCurrentLocation={setCurrentLocation} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
