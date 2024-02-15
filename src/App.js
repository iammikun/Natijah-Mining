import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Services/Service';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Team from './Pages/Team/Team';
import Solid from './Pages/Solid/Solid'
// import PreLoader from './Components/PreLoader/PreLoader';


function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      {/* <PreLoader /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/solid' element={<Solid />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
