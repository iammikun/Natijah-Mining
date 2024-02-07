import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Services/Service';
import About from './Pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/team" element></Route>
        <Route path='/blog' element></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
