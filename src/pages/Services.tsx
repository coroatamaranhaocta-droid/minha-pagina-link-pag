import { motion } from "motion/react";
import { 
  Monitor, 
  Smartphone, 
  TrendingUp, 
  Palette, 
  FileText, 
  Image as ImageIcon,
  ChevronLeft,
  ArrowRight,
  Terminal,
  Youtube,
  Instagram
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SERVICES = [
  {
    id: "sites",
    title: "Criação de Sites",
    description: "Websites modernos, rápidos e totalmente responsivos para converter visitantes em clientes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    icon: <Monitor className="w-6 h-6 text-primary" />,
  },
  {
    id: "apps",
    title: "Desenvolvimento de Apps",
    description: "Transformamos sua ideia em um aplicativo incrível para iOS e Android.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    icon: <Smartphone className="w-6 h-6 text-primary" />,
  },
  {
    id: "social",
    title: "Divulgação Social",
    description: "Estratégias de crescimento e engajamento para suas redes sociais bombarem.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
  },
  {
    id: "logos",
    title: "Identidade Visual",
    description: "Criação de logos e marcas que transmitem profissionalismo e autoridade.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    icon: <Palette className="w-6 h-6 text-primary" />,
  },
  {
    id: "banners",
    title: "Banners & Cartazes",
    description: "Designs impactantes para eventos, YouTube e publicidade física ou digital.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
    icon: <ImageIcon className="w-6 h-6 text-primary" />,
  },
  {
    id: "prints",
    title: "Encartes & Materiais",
    description: "Layouts profissionais para catálogos, flyers e materiais promocionais.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    icon: <FileText className="w-6 h-6 text-primary" />,
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30 relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-matrix-grid animate-matrix pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-scanline pointer-events-none opacity-20" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-50" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <main className="relative z-10 max-w-[640px] mx-auto px-4 pt-12 pb-24">
        
        {/* Back Button */}
        <motion.button
          onClick={() => navigate("/")}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-on-surface/60 hover:text-primary transition-colors mb-8 group bg-white/5 py-2 px-4 rounded-full border border-white/10"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Voltar</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl font-extrabold tracking-tight mb-4 text-on-surface">
            Nossos <span className="text-primary italic">Serviços</span>
          </h1>
          <p className="text-on-surface/60 font-medium leading-relaxed">
            Soluções completas para elevar o nível da sua presença digital. Do design ao código, nós cuidamos de tudo.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 20px 40px -10px rgba(255, 0, 0, 0.15)"
              }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 400,
                damping: 25
              }}
              className="group glass rounded-3xl overflow-hidden hover:border-primary/40 transition-colors duration-500 shadow-xl"
            >
              <div className="relative aspect-[21/9] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter saturate-50 group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 glass rounded-2xl flex items-center justify-center border-white/20 shadow-inner group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6 pt-2">
                <h3 className="font-display text-2xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-on-surface/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <motion.a
                  href="https://wa.me/5599991275988"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group/btn"
                >
                  Solicitar Orçamento
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-primary/10 border border-primary/20 text-center"
        >
          <h2 className="font-display text-2xl font-bold mb-3">Projeto Personalizado?</h2>
          <p className="text-on-surface/70 mb-6 text-sm">Tem um desafio diferente? Vamos conversar e criar algo único para você.</p>
          <a 
            href="https://wa.me/5599991275988"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-surface font-bold py-3 px-8 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-primary/20 uppercase tracking-widest text-sm"
          >
            Falar no WhatsApp
          </a>

          {/* Social Links Footer in Services */}
          <div className="mt-12 flex justify-center gap-6 pt-8 border-t border-white/5">
            <a href="https://www.youtube.com/@web.sebastian" target="_blank" rel="noopener noreferrer" className="text-on-surface/40 hover:text-primary transition-colors">
              <Youtube size={20} />
            </a>
            <a href="https://www.instagram.com/sebastian.bottelho_marketing/" target="_blank" rel="noopener noreferrer" className="text-on-surface/40 hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
