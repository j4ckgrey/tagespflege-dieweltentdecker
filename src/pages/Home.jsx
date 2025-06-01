import React from 'react';
import Image1 from '../assets/Image1.jpeg';
import Image2 from '../assets/Image2.jpeg';
import Image3 from '../assets/Image3.jpeg';
import Image4 from '../assets/Image4.jpeg';
import TimeTableSection from '../components/TimeTableSection';
import DaycarerSection from '../components/DaycarerSection';
import GallerySection from '../components/GallerySection';
import Feedbacks from '../components/Feedbacks';

const Home = () => {
  return (
    <>
      <h1 className="text-center">Willkommen</h1>
      <div className="bg-sky-100 py-3 px-6 text-center flex flex-col justify-center">
        <h3>Kleine Füße – große Abenteuer</h3>
        <p>
          In unserer Kindertagespflege Die Weltentdecker steht jedes Kind im
          Mittelpunkt. Mit Herz, Nähe und viel Erfahrung begleiten wir die
          Kleinen auf ihren ersten Wegen durch eine spannende Welt.
        </p>
        <p>
          Wir bieten eine liebevolle, familiäre Umgebung, in der Kinder sich
          geborgen fühlen und in ihrem eigenen Tempo wachsen dürfen. Ob beim
          Spielen, Basteln oder draußen in der Natur – wir schaffen Raum für
          Neugier, Kreativität und echte Kindheit.
        </p>
        <p>
          Unser Motto „Kleine Füße – große Abenteuer“ ist bei uns gelebter
          Alltag: Jeder Tag bringt neue Entdeckungen, kleine Wunder und große
          Entwicklungsschritte. Dabei sind uns Vertrauen, feste Rituale und ein
          achtsamer Umgang miteinander besonders wichtig.
        </p>
        <p>
          Die Weltentdecker sind mehr als nur Betreuung – wir sind ein Ort zum
          Wohlfühlen, Mitmachen und Wachsen.
        </p>
      </div>

      <div className="bg-rose-100 mt-6 py-3 px-6 text-center flex flex-col justify-center">
        <h3>Spielzeit und Spaß</h3>
        <p>
          Morgens starten wir mit viel Bewegung und Spielen – drinnen und
          draußen. Ob gemeinsame Bastelaktionen, spannende Rollenspiele oder
          Entdeckungen im Garten, die Kinder erleben jeden Tag neue Abenteuer in
          sicherer Umgebung.
        </p>
        <div className="flex flex-row gap-4">
          <div className="aspect-square overflow-hidden rounded-lg shadow-md">
            <img
              src={Image1}
              alt="Kinder spielen draußen"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg shadow-md">
            <img
              src={Image2}
              alt="Kinder beim Spielen drinnen"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-green-100 mt-6 py-3 px-6 text-center flex flex-col justify-center">
        <h3>Gesunde Mahlzeiten</h3>
        <p>
          Für eine ausgewogene Ernährung sorgen wir mit frisch zubereiteten
          Mahlzeiten, die kindgerecht, lecker und abwechslungsreich sind. Dabei
          beziehen wir regionale Zutaten und achten auf eine gesunde Balance.
        </p>
        <div className="flex  grid-cols-3 gap-4">
          <div className="aspect-square overflow-hidden rounded-lg shadow-md">
            <img
              src={Image3}
              alt="Gesundes Mittagessen"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg shadow-md">
            <img
              src={Image4}
              alt="Leckeres Frühstück"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <TimeTableSection className="pt-6" />

      <DaycarerSection className="pt-6" />

      <GallerySection className="pt-6" />

      <Feedbacks className="pt-6" />
    </>
  );
};

export default Home;
