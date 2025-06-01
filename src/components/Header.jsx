import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/Image.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        iconRef.current &&
        !iconRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const mobileHeader = (
    <>
      <Link to="/">
        <img
          src={Image}
          alt="Logo"
          className="h-24 w-auto fixed left-0.5 top-6 z-50 object-contain cursor-pointer sm:left-32"
          style={{
            filter: 'drop-shadow(0 0 1.5px rgba(0,0,0,0.6))',
          }}
        />
      </Link>

      <div className="fixed top-6 right-0.5 z-50 sm:right-32">
        <div className="relative inline-block">
          <button
            ref={iconRef}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="flex flex-col justify-center items-center w-12 h-12 bg-accent rounded-lg shadow-lg cursor-pointer focus:outline-none"
          >
            <span
              className={`block w-7 h-1 rounded transition-transform duration-300 bg-rose-700 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-7 h-1 rounded my-1 transition-opacity duration-300 bg-rose-700 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-7 h-1 rounded transition-transform duration-300 bg-rose-700 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
          <nav
            ref={menuRef}
            className={`absolute right-0 mt-2 flex flex-col space-y-4 bg-accent p-3 rounded-lg shadow-lg transition-all duration-300 w-48 ${
              menuOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center bg-rose-100 text-rose-700 font-semibold px-4 py-2 rounded-lg shadow"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center bg-rose-100 text-rose-700 font-semibold px-4 py-2 rounded-lg shadow"
            >
              Über mich
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center bg-rose-100 text-rose-700 font-semibold px-4 py-2 rounded-lg shadow"
            >
              Kontakt
            </Link>
            <Link
              to="/photos"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center bg-rose-100 text-rose-700 font-semibold px-4 py-2 rounded-lg shadow"
            >
              Fotos
            </Link>
          </nav>
        </div>
      </div>
    </>
  );

  const desktopHeader = (
    <header className="w-full top-0 left-0 z-40 flex justify-between items-center px-32 py-1 bg-amber-200 shadow-md">
      <Link to="/">
        <img src={Image} alt="Logo" className="h-20 w-auto object-contain" />
      </Link>
      <nav className="flex gap-10">
        <Link to="/" className="text-rose-700 font-semibold hover:underline">
          Home
        </Link>
        <Link
          to="/about"
          className="text-rose-700 font-semibold hover:underline"
        >
          Über mich
        </Link>
        <Link
          to="/contact"
          className="text-rose-700 font-semibold hover:underline"
        >
          Kontakt
        </Link>
        <Link
          to="/photos"
          className="text-rose-700 font-semibold hover:underline"
        >
          Fotos
        </Link>
      </nav>
    </header>
  );
  return isMobile ? mobileHeader : desktopHeader;
};

export default Header;
