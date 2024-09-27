import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import "./index.css";

function App() {
  return (
    <div className='container mx-auto mt-10 border-4'>
      
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <nav className="flex justify-between items-center px-6">
          
          <div className="text-2xl font-bold">
            <Link to="/">MyLogo</Link>
          </div>
          
          <div className="space-x-4">
            <Link to="/" className="hover:text-gray-300">HOME</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="p-6">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
