import { Mail, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="fade-up flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-xl tracking-tight">TOMÁŠ SZTUCHLÍK</p>
            <p className="text-zinc-500 text-sm font-light mt-2">
              © {new Date().getFullYear()} Všechna práva vyhrazena.
            </p>
            <p className="text-zinc-500 text-sm font-light">
              IČO: 23189991
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            <a
              href="mailto:sztuchlik.t@gmail.com"
              className="text-zinc-400 text-sm font-light hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <Mail size={16} />
              sztuchlik.t@gmail.com
            </a>
            <a
              href="tel:+420604848034"
              className="text-zinc-400 text-sm font-light hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              {/* Replacing Instagram with generic contact or phone representation */}
              604 848 034
            </a>
            <div className="text-zinc-400 text-sm font-light flex items-center gap-2">
              <MapPin size={16} />
              Česká republika
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
