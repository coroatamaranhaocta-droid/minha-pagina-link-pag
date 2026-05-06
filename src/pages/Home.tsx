import { motion, AnimatePresence } from "motion/react";
import { 
  Youtube, 
  Instagram, 
  Twitter, 
  Play, 
  ExternalLink, 
  Code2, 
  ShoppingBag, 
  Terminal,
  Share2,
  Briefcase,
  Cpu,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ADS = [
  {
    id: 1,
    title: "Landing Pages de Alta Conversão",
    description: "Sites focados em vender mais para seu negócio digital.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
    tag: "Vendas"
  },
  {
    id: 2,
    title: "Gestão de Tráfego Pago",
    description: "Escale seu faturamento com anúncios no Google e Meta.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tag: "Escala"
  },
  {
    id: 3,
    title: "Identidade Visual Premium",
    description: "Design profissional que transmite autoridade e confiança.",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=800",
    tag: "Branding"
  }
];

function ServiceCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ADS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mb-12 relative group">
      <div className="flex items-center gap-3 mb-6">
        <span className="h-[1px] flex-1 bg-white/10"></span>
        <div className="flex items-center gap-2 text-primary-light">
          <Sparkles size={14} className="animate-pulse" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Ofertas Especiais</span>
        </div>
        <span className="h-[1px] flex-1 bg-white/10"></span>
      </div>

      <div className="relative aspect-[16/8] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img 
              src={ADS[current].image} 
              alt={ADS[current].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent p-6 flex flex-col justify-end">
              <span className="inline-block px-2 py-1 rounded bg-primary/20 text-primary-light text-[10px] font-bold uppercase tracking-wider mb-2 w-fit border border-primary/20">
                {ADS[current].tag}
              </span>
              <h3 className="text-xl font-display font-bold text-white mb-1">
                {ADS[current].title}
              </h3>
              <p className="text-sm text-on-surface/70 line-clamp-2">
                {ADS[current].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-4 right-6 flex gap-1.5 backdrop-blur-md bg-black/20 p-2 rounded-full border border-white/5">
          {ADS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-4" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const LINKS = [
  {
    id: "services",
    title: "Meus Serviços",
    description: "Sites, Apps, Design e mais",
    icon: <Briefcase className="w-5 h-5 text-primary-light" />,
    url: "/servicos",
    isInternal: true,
  },
  {
    id: "latest-video",
    type: "video",
    title: "Confira as novidades no canal",
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
    url: "https://www.youtube.com/@web.sebastian",
    views: "Acesse agora",
  },
  {
    id: "setup-tour",
    title: "Meu Setup Hacker 2024",
    icon: <Cpu className="w-5 h-5 text-primary-light" />,
    url: "/servicos",
    isInternal: true,
  },
  {
    id: "merch",
    title: "Loja do Programador",
    icon: <ShoppingBag className="w-5 h-5 text-primary-light" />,
    url: "/servicos",
    isInternal: true,
  },
];

const SOCIALS = [
  { icon: <Youtube size={20} />, url: "https://www.youtube.com/@web.sebastian", label: "YouTube" },
  { icon: <Instagram size={20} />, url: "https://www.instagram.com/sebastian.bottelho_marketing/", label: "Instagram" },
  { icon: <Twitter size={20} />, url: "/servicos", label: "Serviços" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30 relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-matrix-grid animate-matrix pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-scanline pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <main className="relative z-10 max-w-[640px] mx-auto px-4 pt-16 pb-24 flex flex-col items-center">
        
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 w-full"
        >
          <div className="relative inline-block mb-6">
            <div className="w-28 h-28 rounded-full p-1 border-2 border-primary overflow-hidden shadow-[0_0_20px_rgba(255,0,0,0.3)]">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400" 
                alt="Sebastian Botelho"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight mb-2 text-on-surface">
            Sebastian Botelho<span className="text-primary italic font-black mx-1">.</span>
          </h1>
          <p className="text-on-surface/60 font-medium max-w-xs mx-auto leading-relaxed">
            Especialista em Marketing Digital & Desenvolvedor. Transformando visões em resultados reais.
          </p>

          <div className="flex justify-center gap-3 mt-8">
            {SOCIALS.map((social, index) => {
              const isInternal = social.url.startsWith('/');
              const Component = isInternal ? Link : "a";
              const props = isInternal ? { to: social.url } : { href: social.url, target: "_blank", rel: "noopener noreferrer" };

              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Component
                    {...(props as any)}
                    className="w-12 h-12 glass flex items-center justify-center rounded-full glass-hover text-on-surface/80"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Component>
                </motion.div>
              );
            })}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/servicos"
                className="w-12 h-12 glass flex items-center justify-center rounded-full glass-hover text-on-surface/80"
                aria-label="Serviços"
              >
                <Share2 size={20} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Subscribe CTA */}
        <motion.a
          href="https://www.youtube.com/@web.sebastian"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary hover:bg-primary/90 text-surface font-display text-xl font-bold py-4 rounded-xl shadow-2xl shadow-primary/20 mb-12 flex items-center justify-center gap-3 uppercase tracking-wider"
        >
          Inscrever-se
          <Play fill="currentColor" size={20} className="ml-1" />
        </motion.a>

        {/* Ads Carousel */}
        <ServiceCarousel />

        {/* Links Stack */}
        <div className="w-full space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] flex-1 bg-white/10"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] text-on-surface/40 uppercase">Destaques</span>
            <span className="h-[1px] flex-1 bg-white/10"></span>
          </div>

          {LINKS.map((link, index) => {
            const isInternal = link.isInternal;
            const Component = isInternal ? Link : "a";
            const props = isInternal ? { to: link.url } : { href: link.url, target: "_blank", rel: "noopener noreferrer" };

            return (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {link.type === "video" ? (
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/5"
                  >
                    <img 
                      src={link.thumbnail} 
                      alt={link.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent p-6 flex flex-col justify-end">
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                            <Play fill="black" size={18} className="ml-0.5" />
                         </div>
                         <span className="text-xs font-mono font-bold tracking-tight text-white/90">{link.views}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white line-clamp-1 leading-tight group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                    </div>
                  </a>
                ) : (
                  <motion.div whileHover={{ x: 6 }}>
                    <Component
                      {...(props as any)}
                      className="glass glass-hover p-5 rounded-2xl flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <span className="block font-body font-semibold text-lg text-on-surface/90 group-hover:text-primary transition-colors">
                          {link.title}
                        </span>
                        {link.description && (
                          <span className="block text-xs text-on-surface/40 font-medium mt-0.5">{link.description}</span>
                        )}
                      </div>
                      <ExternalLink size={18} className="text-on-surface/20 group-hover:text-primary transition-colors" />
                    </Component>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-on-surface/20 hover:text-primary/40 transition-colors cursor-default">
            <span className="text-[10px] font-black tracking-[0.3em]">TUBELINK</span>
            <div className="w-1 h-1 rounded-full bg-primary/40"></div>
            <span className="text-[10px] font-black tracking-[0.3em]">PRO</span>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
