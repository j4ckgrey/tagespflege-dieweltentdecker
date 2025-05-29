import React from 'react';
import Image from '../assets/photos/05.jpeg';

const TimeTableSection = () => (
  <section className="flex flex-col md:flex-row items-center bg-gray-100 gap-8 py-3 px-6 my-5 h-[450px] ">
    <div className="w-full md:w-1/3 h-auto md:h-[400px]">
      <img
        src={Image}
        alt="Tagesablauf"
        className="rounded-xl shadow-lg object-cover w-full h-full"
      />
    </div>
    <div className="w-full md:w-2/3">
      <h2 className="text-2xl font-bold mb-4">Unser Tagesablauf</h2>
      <p className="mb-2">
        🕖 <strong>07:00 Uhr:</strong> Ankunft und freies Spiel
      </p>
      <p className="mb-2">
        🍎 <strong>09:00 Uhr:</strong> Gemeinsames Frühstück
      </p>
      <p className="mb-2">
        🎨 <strong>10:00 Uhr:</strong> Kreativ- und Bewegungsangebote
      </p>
      <p className="mb-2">
        🌳 <strong>11:30 Uhr:</strong> Aufenthalt im Freien
      </p>
      <p className="mb-2">
        🍽️ <strong>12:30 Uhr:</strong> Mittagessen
      </p>
      <p className="mb-2">
        😴 <strong>13:00 Uhr:</strong> Ruhezeit / Vorlesen
      </p>
      <p className="mb-2">
        👋 <strong>15:00 Uhr:</strong> Abholzeit
      </p>
      <p className="mt-4">
        Ein strukturierter Tag voller Lachen, Lernen und liebevoller Betreuung.
      </p>
    </div>
  </section>
);

export default TimeTableSection;
