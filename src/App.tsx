import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import { PageType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    document.title = currentPage === 'home'
      ? 'Ajay Chiluveru | SEO & Digital Marketing Professional'
      : 'Skills & Certifications | Ajay Chiluveru';
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' ? <Home /> : <Skills />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
