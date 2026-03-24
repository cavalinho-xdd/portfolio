const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden border-t border-zinc-900 border-b bg-zinc-950 text-center md:text-left">
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Profile Photo Area */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end fade-up">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl border border-white/10 group">
              <img 
                src="/profile2.jpg" 
                alt="Tomáš Sztuchlík" 
                className="w-full h-full object-cover object-[center_15%] filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Text Area */}
          <div className="w-full md:w-1/2 fade-up" style={{ transitionDelay: '100ms' }}>
            <p className="text-zinc-500 text-sm font-light tracking-[0.3em] uppercase mb-6">
              O mně
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Zkušenosti jsou základ. Drive je motor.
            </h2>
            <div className="text-zinc-300 text-lg font-light leading-relaxed mb-8 max-w-xl space-y-4">
              <p>
                Za několik let v odvětví mám za sebou tisíce hodin v postprodukci a stovky úspěšných projektů – od makléřů z RE/MAXu a marketingových agentur až po zahraniční trhy v Dubaji. Právě tato rozmanitost mě naučila bleskové flexibilitě. Dokážu se okamžitě adaptovat na váš brand, tempo i náročná zadání.
              </p>
              <p>
                Vím ale, že zkušenosti nejsou vše. Zastávám názor, že silné „PROČ“ a tah na branku doručí z dlouhodobého hlediska daleko víc než jen roky v oboru. Tvořím videa s energií, která nenechá váš projekt stát na místě.
              </p>
            </div>
            
            <div className="flex gap-6 items-center">
              <div>
                <span className="block text-3xl font-bold text-white mb-1">30+</span>
                <span className="text-zinc-500 text-sm uppercase tracking-widest">Spokojených klientů</span>
              </div>
              <div className="w-px h-10 bg-zinc-800"></div>
              <div>
                <span className="block text-3xl font-bold text-white mb-1">1500+</span>
                <span className="text-zinc-500 text-sm uppercase tracking-widest">Vytvořených videí</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
