import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/Image.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const closeTimeoutRef = useRef(null);

  const isTouchDevice = () =>
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    setIsTouch(isTouchDevice());

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

  return (
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
      <div
        className="fixed top-6 right-0.5 z-50 sm:right-32"
        onMouseEnter={() => {
          if (!isTouch) {
            clearTimeout(closeTimeoutRef.current);
            setMenuOpen(true);
          }
        }}
        onMouseLeave={() => {
          if (!isTouch) {
            closeTimeoutRef.current = setTimeout(() => {
              setMenuOpen(false);
            }, 200);
          }
        }}
      >
        <button
          ref={iconRef}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="flex flex-col justify-center items-center w-12 h-12 bg-accent rounded-lg shadow-lg cursor-pointer focus:outline-none"
        >
          <span
            className={`block w-7 h-1 rounded transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
            style={{ backgroundColor: 'black' }}
          />
          <span
            className={`block w-7 h-1 rounded my-1 transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ backgroundColor: 'black' }}
          />
          <span
            className={`block w-7 h-1 rounded transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
            style={{ backgroundColor: 'black' }}
          />
        </button>
        <nav
          ref={menuRef}
          className={`fixed top-6 right-0.5 z-50 flex flex-col space-y-4 bg-accent p-6 rounded-lg shadow-lg sm:right-32 transition-transform duration-300 ${
            menuOpen
              ? 'translate-x-0 opacity-100'
              : 'translate-x-10 opacity-0 pointer-events-none'
          }`}
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-rose-700 font-semibold hover:underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-rose-700 font-semibold hover:underline"
          >
            Über uns
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-rose-700 font-semibold hover:underline"
          >
            Kontakt
          </Link>
          <Link
            to="/photos"
            onClick={() => setMenuOpen(false)}
            className="text-rose-700 font-semibold hover:underline"
          >
            Fotos
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
