import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Filip V.",
    role: "Social media manager",
    quote: "Tome, jsem s tebou moc spokojený, spolupracoval jsem už celkem tak s 20-30 editory a jednoznačně bych tě zařadil mezi špičku. Obdivuju, že zvládáš tolik pokynů, co ti vždy naložíme. Videa máš vždy sestříhaná rychle a nikdy nečekáme dlouho, čehož si cením. Rozhodně bych tě komukoliv doporučil.",
  },
  {
    name: "Michal Š.",
    role: "Social media manager a majitel umělecké firmy",
    quote: "Tome, chtěl bych ti poděkovat, že jsi se stal součástí tohoto týmu. Pečlivě jsme vybírali z celkem 26 kandidátů a jsem plně přesvědčený, že jsme vybrali toho nejlepšího. Nejenom, že tvoje výsledky jsou na mnohem vyšší úrovni než u ostatních, ale jdeš do práce s přesahem. Líbí se mi, že děláš věci, které víš, že potřebujeme, ale dělat je nemusíš. Opravuješ chyby po ostatních editorech a neustále přicházíš s novými nápady.",
  },
  {
    name: "Daniel P. (Matthew)",
    role: "Manažer marketingové agentury, 9xstudios",
    quote: "Co se týče Tomáše, tak můžu říct nejenom za sebe, ale za celou firmu, že jsme opravdu spokojení s jeho videi a s jeho výkonem. Tomáš vždycky pochopí to, co my chceme, dokáže to sestříhat velmi rychle a vždycky na deadline. Tomáš je velmi spolehlivý, ale také otevřený zpětné vazbě. Pokud hledáte nového editora do svého týmu, určitě neváhejte.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-zinc-950/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 fade-up">
          <p className="text-zinc-500 text-sm font-light tracking-[0.3em] uppercase mb-4">
            Proč to se mnou dává smysl
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
            Reference klientů
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-all duration-300 fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div>
                <Quote className="w-10 h-10 text-white/20 mb-6" />
                <p className="text-zinc-300 font-light leading-relaxed mb-8 italic">
                  „{testimonial.quote}“
                </p>
              </div>
              <div>
                <div className="h-[1px] w-12 bg-white/20 mb-4"></div>
                <h4 className="text-white font-medium tracking-wide">
                  {testimonial.name}
                </h4>
                <p className="text-zinc-500 text-sm mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
