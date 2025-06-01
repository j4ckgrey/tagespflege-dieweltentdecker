import React, { useState, useEffect } from 'react';
import Image1 from '../assets/photos/01.jpeg';
import Image2 from '../assets/photos/02.jpeg';
import Image3 from '../assets/photos/03.jpeg';

const GallerySection = () => {
  const images = [];
  images.push(Image1, Image2, Image3);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleKeyDown = (e) => {
    if (selectedIndex !== null) {
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    }
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  return (
    <section className="bg-sky-100 py-3 px-6 text-center flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-6">Einblick in unseren Alltag</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={img}
              alt={`Foto ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            className="absolute top-10 right-10 text-gray-300 text-3xl font-bold z-60 hover:text-white transition bg-transparent border-none focus:outline-none"
          >
            &times;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(
                (prev) => (prev - 1 + images.length) % images.length
              );
            }}
            className="absolute left-10 text-gray-300 text-4xl font-bold z-60 hover:text-white transition bg-transparent border-none focus:outline-none"
          >
            &#8592;
          </button>
          <img
            src={images[selectedIndex]}
            alt={`Vollbild ${selectedIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev + 1) % images.length);
            }}
            className="absolute right-10 text-gray-300 text-4xl font-bold z-60 hover:text-white transition bg-transparent border-none focus:outline-none"
          >
            &#8594;
          </button>
        </div>
      )}
      <a
        href="/Photos"
        className="text-rose-600 hover:underline font-medium text-lg"
      >
        → Klicke hier für unser Fotoalbum
      </a>
    </section>
  );
};

export default GallerySection;
