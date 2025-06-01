import React from 'react';
import Image from '../assets/photos/12.jpeg';

const DaycarerSection = () => (
  <section className="flex flex-col md:flex-row items-center gap-8 bg-rose-100 py-3 px-6 my-5">
    <div className="w-full md:w-2/3">
      <h2 className="text-2xl font-bold mb-4">Unsere Tagesmutter</h2>
      <p className="mb-3">
        Mit Herz, Erfahrung und einem offenen Ohr begleitet unsere Tagesmutter
        die Kinder auf ihren kleinen Abenteuern. In einer liebevollen Umgebung
        schafft sie Raum für Entfaltung, Geborgenheit und ganz viel Spaß.
      </p>
      <p>
        Pädagogisch geschult, kreativ im Alltag und stets mit einem Lächeln – so
        wird jeder Tag zu etwas Besonderem.
      </p>
    </div>
    <div className="w-full md:w-1/3 h-auto md:h-[400px]">
      <img
        src={Image}
        alt="Tagesmutter"
        className="rounded-xl shadow-lg object-cover w-full h-full"
      />
    </div>
  </section>
);

export default DaycarerSection;
