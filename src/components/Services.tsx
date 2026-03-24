import { Play, TrendingUp } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 fade-up">
          <p className="text-zinc-500 text-sm font-light tracking-[0.3em] uppercase mb-4">
            Moje Specializace
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
            Co pro vás mohu vytvořit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Service 1 */}
          <div className="fade-up relative group p-8 md:p-10 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800/50 transition-colors duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-14 h-14 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
              <TrendingUp className="w-6 h-6 text-zinc-300 group-hover:text-white transition-colors" />
            </div>
            <h3 className="relative z-10 text-2xl font-semibold text-white mb-4">
              Výkonnostní Video Reklama
            </h3>
            <p className="relative z-10 text-zinc-400 leading-relaxed font-light">
              Tvořím "scroll-stoppery" – videa, která okamžitě zaujmou, zvýší proklik a doručí konverze pro vaše Facebook a Instagram kampaně.
            </p>
          </div>

          {/* Service 2 */}
          <div className="fade-up relative group p-8 md:p-10 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800/50 transition-colors duration-500 overflow-hidden" style={{ transitionDelay: '100ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-14 h-14 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
              <Play className="w-6 h-6 text-zinc-300 group-hover:text-white transition-colors" />
            </div>
            <h3 className="relative z-10 text-2xl font-semibold text-white mb-4">
              Obsahový Marketing & Brand
            </h3>
            <p className="relative z-10 text-zinc-400 leading-relaxed font-light">
              Buduji loajální komunitu a důvěru ve značku. Od organických Reels po strategická úvodní videa pro weby a dynamická after movies z vašich eventů. Obsah, který edukuje i prodává.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;