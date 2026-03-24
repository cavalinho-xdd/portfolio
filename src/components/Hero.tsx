import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end noise-overlay overflow-hidden"
    >
      {/* Background video with overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Gradient blur orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-muted/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-1/6 w-[300px] h-[300px] bg-muted/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24 pt-32 w-full">
        <div className="fade-up">
          <p className="text-zinc-400 text-sm font-light tracking-[0.3em] uppercase mb-6">
            Video Postprodukce
          </p>
          <h1 className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter">
            TOMÁŠ
            <br />
            SZTUCHLÍK
          </h1>
          <p className="text-zinc-300 text-2xl sm:text-3xl md:text-4xl font-light tracking-tight mt-6 mb-10 max-w-2xl">
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
