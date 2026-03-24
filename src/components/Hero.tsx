const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end noise-overlay overflow-hidden"
    >
      {/* Background videos container */}
      <div className="absolute inset-0 flex flex-row">
        {/* První video (na mobilu zobrazeno na 100% šířky, na PC jen na 50%) */}
        <div className="w-full md:w-1/2 h-full relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          >
            <source src="https://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Druhé video (skryté na mobilech a malých tabletech, zobrazeno jen md+) */}
        <div className="hidden md:block md:w-1/2 h-full relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          >
            <source src="https://media.w3.org/2010/05/video/movie_300.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Gradient overlay pro pěkný přechod do textu - překrývá obě videa najednou */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
      </div>

      {/* Gradient blur orbs na pozadí pro dokreslení atmosféry */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-muted/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6 w-[300px] h-[300px] bg-muted/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Textový obsah */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24 pt-32 w-full">
        <div className="fade-up">
          <p className="text-zinc-400 text-sm font-light tracking-[0.3em] uppercase mb-6 drop-shadow-md">
            Video Postprodukce
          </p>
          <h1 className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter drop-shadow-xl">
            TOMÁŠ
            <br />
            SZTUCHLÍK
          </h1>
          <p className="text-zinc-300 text-2xl sm:text-3xl md:text-4xl font-light tracking-tight mt-6 mb-10 max-w-2xl drop-shadow-md">
            Posouvám vaše záběry na novou úroveň. Dynamický střih a postprodukce přesně na míru podle vašich potřeb.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#works"
              className="inline-block glass bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-white/10 transition-all duration-300 rounded-lg text-center"
            >
              Prohlédnout práci
            </a>
            <a
              href="#contact"
              className="inline-block glass bg-black/20 backdrop-blur-xl border border-white/5 px-8 py-4 text-sm font-light tracking-widest uppercase text-white hover:bg-white/10 transition-all duration-300 rounded-lg text-center"
            >
              Kontaktovat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
