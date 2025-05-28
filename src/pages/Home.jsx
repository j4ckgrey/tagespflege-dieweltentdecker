import React from 'react';
import Image1 from '../assets/Image1.jpeg';
import Image2 from '../assets/Image2.jpeg';
import Image3 from '../assets/Image3.jpeg';
import Image4 from '../assets/Image4.jpeg';

const Home = () => (
  <div>
    <h2 className="pt-2">Willkommen bei den Weltentdeckern</h2>
    <h3 className="pt-2">Kleine Füße – große Abenteuer</h3>

    <p className="pt-2">
      In unserer Kindertagespflege Die Weltentdecker steht jedes Kind im
      Mittelpunkt. Mit Herz, Nähe und viel Erfahrung begleiten wir die Kleinen
      auf ihren ersten Wegen durch eine spannende Welt.
    </p>
    <p className="pt-2">
      Wir bieten eine liebevolle, familiäre Umgebung, in der Kinder sich
      geborgen fühlen und in ihrem eigenen Tempo wachsen dürfen. Ob beim
      Spielen, Basteln oder draußen in der Natur – wir schaffen Raum für
      Neugier, Kreativität und echte Kindheit.
    </p>
    <p className="pt-2">
      Unser Motto „Kleine Füße – große Abenteuer“ ist bei uns gelebter Alltag:
      Jeder Tag bringt neue Entdeckungen, kleine Wunder und große
      Entwicklungsschritte. Dabei sind uns Vertrauen, feste Rituale und ein
      achtsamer Umgang miteinander besonders wichtig.
    </p>
    <p className="pt-2">
      Die Weltentdecker sind mehr als nur Betreuung – wir sind ein Ort zum
      Wohlfühlen, Mitmachen und Wachsen.
    </p>

    {/* Day at Die Weltentdecker */}
    <h2 className="pt-2">So sieht ein Tag bei uns aus</h2>

    <h3 className="pt-2">Spielzeit und Spaß</h3>
    <p className="pt-2">
      Morgens starten wir mit viel Bewegung und Spielen – drinnen und draußen.
      Ob gemeinsame Bastelaktionen, spannende Rollenspiele oder Entdeckungen im
      Garten, die Kinder erleben jeden Tag neue Abenteuer in sicherer Umgebung.
    </p>

    {/* One photo at a time, full width */}
    <img
      src={Image1}
      alt="Kinder spielen draußen"
      className="w-full h-auto rounded-lg shadow-md pt-2"
    />
    <img
      src={Image2}
      alt="Kinder beim Spielen drinnen"
      className="w-full h-auto rounded-lg shadow-md pt-2"
    />

    <h3 className="pt-2">Gesunde Mahlzeiten</h3>
    <p className="pt-2">
      Für eine ausgewogene Ernährung sorgen wir mit frisch zubereiteten
      Mahlzeiten, die kindgerecht, lecker und abwechslungsreich sind. Dabei
      beziehen wir regionale Zutaten und achten auf eine gesunde Balance.
    </p>

    <img
      src={Image3}
      alt="Gesundes Mittagessen"
      className="w-full h-auto rounded-lg shadow-md pt-2"
    />
    <img
      src={Image4}
      alt="Leckeres Frühstück"
      className="w-full h-auto rounded-lg shadow-md pt-2"
    />
  </div>
);

export default Home;
