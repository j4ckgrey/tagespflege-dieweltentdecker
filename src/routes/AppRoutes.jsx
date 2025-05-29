import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Datenschutzerklarung from '../pages/Datenschutzerklarung';
import Impressum from '../pages/Impressum';
import NotFound from '../pages/NotFound';
import Photos from '../pages/Photos';
import AGB from '../pages/AGB';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from '../assets/Image.png';
import CookieBanner from '../components/CookieBanner';

const AppRoutes = () => (
  <Router>
    <div className="relative flex flex-col min-h-screen">
      <div className="absolute inset-0 bg-hands -z-0"></div>
      <Header />
      <main className="flex items-center justify-center w-full min-h-screen">
        <div className="page-container">
          <img src={Image} alt="logo" className="w-96 h-auto mx-auto mb-6" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/datenschutz" element={<Datenschutzerklarung />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/AGB" element={<AGB />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  </Router>
);

export default AppRoutes;
