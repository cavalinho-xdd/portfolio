import { FC } from "react";

const logos = [
  { name: "RE_MAX", file: "RE_MAX.png" },
  { name: "JANDASPORT", file: "JANDASPORT.png" },
  { name: "Sapa Trip", file: "Sapa Trip.png" },
  { name: "PoseidonTub", file: "PoseidonTub.png" },
  { name: "Inago Digital", file: "Inago Digital.jpg" },
  { name: "9xstudios", file: "9xstudios.jpg" },
  { name: "ShortPRO", file: "ShortPRO.png" },
  { name: "OceněnáVína", file: "OceněnáVína.cz.gif" },
];

const Brands: FC = () => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-zinc-500 text-center text-sm font-light tracking-[0.2em] uppercase mb-12">
          Důvěřují nám tyto značky
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={`/logos/${logo.file}`}
              alt={logo.name}
              className="h-10 md:h-14 lg:h-16 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
