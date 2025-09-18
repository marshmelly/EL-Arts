import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Artworks from './Pages/Art';
import Assets from './Pages/Assets';
import Tutorials from './Pages/Tutorials';
import Navbar from './Pages/Nav';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
    


     
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/artworks' element={<Artworks />} />
        <Route path='/assets' element={<Assets />} />
        <Route path='tutorials' element={<Tutorials />} />
        
       </Routes>
      

    </div>
  );
}

export default App;
