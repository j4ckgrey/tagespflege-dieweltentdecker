import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from '../assets/Image.png';

const MainLayout = ({ children }) => (
  <div className="relative flex flex-col min-h-screen">
    <div className="absolute inset-0 bg-hands -z-0"></div>
    <Header />
    <main className="flex-grow w-full flex justify-center">
      <div className="page-container">
        <img src={Image} alt="logo" className="w-96 h-auto mx-auto mb-6" />
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

export default MainLayout;
