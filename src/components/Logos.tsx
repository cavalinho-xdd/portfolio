const logos = [
  { src: "/logos/9xstudios.jpg", alt: "9X Studios" },
  { src: "/logos/bitez.jpg", alt: "Bitez Technology" },
  { src: "/logos/inago.jpg", alt: "Inago Digital" },
  { src: "/logos/jandasport.png", alt: "JANDA SPORT" },
  { src: "/logos/ocenena_vina.gif", alt: "Oceněná Vína" },
  { src: "/logos/prijimacky_jinak.png", alt: "Přijímačky Jinak" },
  { src: "/logos/remax.png", alt: "RE/MAX" },
  { src: "/logos/shortpro.png", alt: "ShortPRO" },
  { src: "/logos/Barvírna.png", alt: "Barvírna" },
  { src: "/logos/Grape SC.png", alt: "Grape SC" },
  { src: "/logos/Starfit.png", alt: "Starfit" },
  { src: "/logos/Zezem.jpg", alt: "Zezem" },
];

const Logos = () => {
  return (
    <section className="py-24 bg-zinc-950/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12 fade-up">
          <p className="text-zinc-500 text-sm font-light tracking-[0.3em] uppercase mb-4">
            Spolupráce a klienti
          </p>
          <h2 className="text-white text-3xl font-bold tracking-tight">
            Moje práce pro značky
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
          {logos.map((logo, index) => {
            // Tyto loga jsou nahrána jako PNG beze správného ořezu/průhlednosti (mají plné pozadí)
            // nebo chcipnute jako JPG. Místo brightness úpravy na ně jen 
            // použijeme grayscale a lehký kontrast, a případně mix-blend mód pro minimalizaci okrajů.
            const isOcenenaVina = logo.src.includes('ocenena_vina');
            const isRemax = logo.src.includes('remax');
            const isGrape = logo.src.includes('Grape');
            const isBarvirna = logo.src.includes('Barvírna');
            const isStarfit = logo.src.includes('Starfit');
            const isJpg = logo.src.toLowerCase().endsWith('.jpg') || logo.src.toLowerCase().endsWith('.jpeg');
            const hasSolidBackground = isOcenenaVina || isRemax || isJpg || isGrape || isBarvirna || isStarfit;

            return (
              <div key={index} className="w-full flex justify-center fade-up group" style={{ transitionDelay: `${index * 50}ms` }}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`max-h-16 w-auto object-contain filter grayscale ${
                    hasSolidBackground 
                      ? 'mix-blend-screen opacity-90' 
                      : 'invert brightness-0'
                  } hover:scale-105 transition-all duration-300`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Logos;
