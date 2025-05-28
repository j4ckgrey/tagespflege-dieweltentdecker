import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Datenschutzerklarung from '../pages/Datenschutzerklarung';
import Impressum from '../pages/Impressum';
import NotFound from '../pages/NotFound';
import Photos from '../pages/Photos';
import MainLayout from '../layouts/MainLayout';

const AppRoutes = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/datenschutz" element={<Datenschutzerklarung />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  </Router>
);

export default AppRoutes;
