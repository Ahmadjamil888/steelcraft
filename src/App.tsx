import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Manufacturing from './components/Manufacturing';
import Sustainability from './components/Sustainability';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'products': return <Products />;
      case 'manufacturing': return <Manufacturing />;
      case 'sustainability': return <Sustainability />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="transition-all duration-500">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;