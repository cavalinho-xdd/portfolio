import { useRef, useState, useEffect } from "react";
import { Maximize, Minimize } from "lucide-react";

type GalleryItem = {
  id: number;
  type: "video";
  src: string;
  poster?: string;
  aspect: "portrait" | "landscape" | "square";
  title: string;
  client?: string;
};

const items: GalleryItem[] = [
  { id: 1, type: "video", src: "/videos/starfit.mov", aspect: "portrait", title: "Starfit Vizuál", client: "Starfit" },
  { id: 3, type: "video", src: "/videos/michalfx1.mov", aspect: "portrait", title: "Real Estate FX", client: "Michal FX" },
  { id: 2, type: "video", src: "/videos/makler.mp4", aspect: "landscape", title: "Promo Video", client: "9X" },
  { id: 4, type: "video", src: "/videos/michalfx_real2.mov", aspect: "portrait", title: "Real Estate FX 2", client: "Michal FX" },
  { id: 5, type: "video", src: "/videos/rozhovor.mov", aspect: "portrait", title: "Rozhovor", client: "9XSTUDIO" },
];

const getSpanClasses = (aspect: string) => {
  switch (aspect) {
    case "portrait":
      return "aspect-[9/16] mb-6 md:mb-10 lg:mb-12 break-inside-avoid";
    case "landscape":
      return "aspect-video mb-6 md:mb-10 lg:mb-12 break-inside-avoid";
    case "square":
      return "aspect-square mb-6 md:mb-10 lg:mb-12 break-inside-avoid";
    default:
      return "aspect-[9/16] mb-6 md:mb-10 lg:mb-12 break-inside-avoid";
  }
};

const Gallery = () => {
  return (
    <section id="works" className="relative py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="fade-up mb-12 flex justify-between items-end">
          <div>
            <p className="text-zinc-500 text-sm font-light tracking-[0.3em] uppercase mb-2">
              Vybrané projekty
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
              Moje Portfolio
            </h2>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-10 lg:gap-12 w-full">
          {items.map((item) => (
            <GalleryItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryItemCard = ({ item }: { item: GalleryItem }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    // Zabráníme spuštění videa, pokud klikneme na tlačítko fullscreenu
    if ((e.target as HTMLElement).closest('.fullscreen-btn')) {
      return;
    }
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(console.error);
        // Unmute if you want users to hear on click
        // videoRef.current.muted = false;
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      // Žádáme o fullscreen celého kontejneru pro zachování stylů (nebo jen videa, pokud by to dělalo problémy)
      if (videoRef.current?.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any)?.webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen(); // Safari
      } else if ((videoRef.current as any)?.msRequestFullscreen) {
        (videoRef.current as any).msRequestFullscreen(); // IE11
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen(); // Safari
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen(); // IE11
      }
      setIsFullscreen(false);
    }
  };

  // Posluchač na změnu fullscreenu přes 'Esc' nebo nativní UI
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  const isPortrait = item.aspect === "portrait";

  const content = (
    <>
      <video
        ref={videoRef}
        src={item.src}
        className={`w-full h-full bg-black transition-transform duration-700 ease-out hover:scale-105 ${isFullscreen ? 'object-contain' : 'object-cover'} ${isPlaying ? 'opacity-100' : 'opacity-70'}`}
        loop
        playsInline
      />
      
      {/* Tlačítko pro maximalizaci (viditelné při onHover celého bloku, nebo rovnou nahoře vpravo) */}
      <button 
        onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
        className="fullscreen-btn absolute top-4 right-4 z-40 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-black/60 focus:outline-none"
        aria-label="Toggle Fullscreen"
      >
        {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
      </button>

      {/* Play Icon Indicator overlay */}
      {!isPlaying && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full glass bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer z-20">
          <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-2 drop-shadow-md" />
        </div>
      )}

      {/* Title overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none transition-opacity duration-500 flex flex-col justify-end p-8 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
        <div>
          <p className="text-white text-2xl font-medium tracking-wide mb-2 drop-shadow-lg">{item.title}</p>
          {item.client && (
            <p className="text-zinc-300 text-sm font-light uppercase tracking-widest drop-shadow-lg">{item.client}</p>
          )}
        </div>
      </div>
    </>
  );

  return (
    <div
      ref={containerRef}
      className={`fade-up relative group cursor-pointer ${getSpanClasses(item.aspect)}`}
      onClick={handleClick}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-950 shadow-xl ring-1 ring-zinc-800/50">
        {content}
      </div>
    </div>
  );
};

export default Gallery;
