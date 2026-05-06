
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import SofaPage from './pages/SofaPage';
import ChairPage from './pages/ChairPage';
import BedroomPage from './pages/BedroomPage';
import LivingRoomPage from './pages/LivingRoomPage';
import DiningPage from './pages/DiningPage';
import StoragePage from './pages/StoragePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import InformationPage from './pages/InformationPage';
import BookingPage from './pages/BookingPage';
import FloatingActionBar from './components/FloatingActionBar';
import Footer from './components/Footer';
import './index.css';


function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = useCallback(() => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
      });
    }
  }, [deferredPrompt]);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sofas" element={<SofaPage />} />
            <Route path="/chairs" element={<ChairPage />} />
            <Route path="/bedroom" element={<BedroomPage />} />
            <Route path="/living" element={<LivingRoomPage />} />
            <Route path="/dining" element={<DiningPage />} />
            <Route path="/storage" element={<StoragePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/info" element={<InformationPage />} />
            <Route path="/book" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer onInstallPWA={deferredPrompt ? handleInstallClick : null} showInstall={!!deferredPrompt} />
        <FloatingActionBar />
      </div>
    </Router>
  );
}

export default App;
