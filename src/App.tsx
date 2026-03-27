import React from 'react';
import { Leaf, Recycle, Building2, Users, ArrowRight, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import Chat from './components/Chat';

const projects = [
  {
    title: "Eco-Habitat 2025",
    category: "Architecture",
    image: "https://picsum.photos/seed/eco-house/800/600",
    description: "A bioclimatic residence using local and recycled materials."
  },
  {
    title: "Circular Furniture",
    category: "Product Design",
    image: "https://picsum.photos/seed/furniture/800/600",
    description: "Series of chairs designed to be fully disassembled and recycled."
  },
  {
    title: "Urban Rain Garden",
    category: "Urbanism",
    image: "https://picsum.photos/seed/garden/800/600",
    description: "Natural rainwater management in the heart of the city."
  }
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full z-40 glass-panel border-b border-earth-olive/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-earth-olive text-white p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Leaf size={24} />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-earth-olive">EarthShapers</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-earth-olive/80">
            <a href="#" className="hover:text-earth-olive transition-colors">Home</a>
            <a href="#projets" className="hover:text-earth-olive transition-colors">Projects</a>
            <a href="#services" className="hover:text-earth-olive transition-colors">Services</a>
            <a href="#coop" className="hover:text-earth-olive transition-colors">The Coop</a>
            <button className="bg-earth-olive text-white pill-button hover:bg-earth-clay transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/sustainable-design/1920/1080?blur=2" 
              alt="Sustainable Design" 
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-earth-cream/50 via-transparent to-earth-cream" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1 bg-earth-olive/10 text-earth-olive rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Sustainable & Circular Design
              </span>
              <h1 className="text-7xl md:text-8xl font-serif leading-[0.9] mb-8 text-earth-ink">
                Shaping the future <br />
                <span className="italic text-earth-olive">with the Earth.</span>
              </h1>
              <p className="text-xl text-earth-ink/70 mb-10 leading-relaxed max-w-xl">
                EarthShapers is a cooperative of designers, architects, and artisans dedicated to creating spaces and objects that respect planetary boundaries.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-earth-olive text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-earth-clay transition-all group">
                  Discover our projects
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-earth-olive text-earth-olive px-8 py-4 rounded-full font-medium hover:bg-earth-olive hover:text-white transition-all">
                  Our Manifesto
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-earth-cream rounded-2xl flex items-center justify-center text-earth-olive">
                  <Building2 size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold">Regenerative Architecture</h3>
                <p className="text-earth-ink/60 leading-relaxed">
                  We design buildings that don't just minimize their impact, but actively participate in the health of their ecosystem.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-14 h-14 bg-earth-cream rounded-2xl flex items-center justify-center text-earth-olive">
                  <Recycle size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold">Circular Design</h3>
                <p className="text-earth-ink/60 leading-relaxed">
                  Every product is thought through its full lifecycle. No waste, only resources for the future.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-14 h-14 bg-earth-cream rounded-2xl flex items-center justify-center text-earth-olive">
                  <Users size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold">Cooperative Support</h3>
                <p className="text-earth-ink/60 leading-relaxed">
                  We help organizations transition towards more sustainable production and governance models.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projets" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-5xl font-serif mb-4">Recent Realizations</h2>
                <p className="text-earth-ink/60">Exploring how we apply our principles every day.</p>
              </div>
              <button className="text-earth-olive font-medium flex items-center gap-2 hover:underline">
                View full portfolio <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-3xl mb-6 relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-earth-olive text-xs font-bold rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-serif font-bold mb-2">{project.title}</h4>
                  <p className="text-earth-ink/60 text-sm leading-relaxed">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-earth-olive text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Leaf size={400} className="rotate-45 translate-x-1/2 -translate-y-1/4" />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl md:text-6xl font-serif mb-8">Ready to shape tomorrow?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Whether you are an individual, a business, or a community, we are here to bring your sustainable projects to life.
            </p>
            <button className="bg-white text-earth-olive px-10 py-5 rounded-full font-bold text-lg hover:bg-earth-cream transition-colors shadow-xl">
              Start a collaboration
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-earth-olive/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Leaf size={24} className="text-earth-olive" />
                <span className="text-2xl font-serif font-bold text-earth-olive">EarthShapers</span>
              </div>
              <p className="text-earth-ink/60 max-w-sm leading-relaxed">
                Sustainable design, circular architecture, and fertile urbanism. A cooperative committed to life.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-earth-olive">Navigation</h5>
              <ul className="space-y-4 text-sm text-earth-ink/60">
                <li><a href="#" className="hover:text-earth-olive">Home</a></li>
                <li><a href="#projets" className="hover:text-earth-olive">Projects</a></li>
                <li><a href="#services" className="hover:text-earth-olive">Services</a></li>
                <li><a href="#coop" className="hover:text-earth-olive">The Coop</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-earth-olive">Follow us</h5>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-earth-olive/20 flex items-center justify-center text-earth-olive hover:bg-earth-olive hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-earth-olive/20 flex items-center justify-center text-earth-olive hover:bg-earth-olive hover:text-white transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-earth-olive/20 flex items-center justify-center text-earth-olive hover:bg-earth-olive hover:text-white transition-all">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-earth-olive/10 flex flex-col md:row justify-between items-center gap-6 text-xs text-earth-ink/40">
            <p>© 2026 EarthShapers Cooperative. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-earth-olive">Legal Mentions</a>
              <a href="#" className="hover:text-earth-olive">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <Chat />
    </div>
  );
}
