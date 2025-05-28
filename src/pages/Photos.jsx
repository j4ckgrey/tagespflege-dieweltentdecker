import React, { useState, useEffect } from 'react';

const imageModules = import.meta.glob('../assets/photos/*.jpeg', {
  eager: true,
});
const images = Object.values(imageModules).map((mod) => mod.default);

const Photos = () => {
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
    <div>
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Unsere schönen Momente
      </h2>
      <p className="text-secondary text-center mb-10 max-w-2xl mx-auto">
        Hier finden Sie eine Auswahl besonderer Momente, die wir mit den Kindern
        erleben. Diese Bilder zeigen, wie bunt und kreativ unser Alltag ist.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
            className="absolute top-10 right-32 text-gray-300 text-3xl font-bold z-60 hover:text-white transition bg-transparent border-none focus:outline-none"
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
    </div>
  );
};

export default Photos;
