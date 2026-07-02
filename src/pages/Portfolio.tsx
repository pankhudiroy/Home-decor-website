import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { projects } from '../data/projects';

interface PortfolioProps {
  onNavigate: (path: string) => void;
}

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <PageHero
        eyebrow="Portfolio"
        title="Selected projects, considered spaces"
        subtitle="A curated selection of our residential, commercial, and hospitality work."
        // image="https://images.pexels.com/photos/2453694/pexels-photo-2453694.jpeg?auto=compress&cs=tinysrgb&w=1920"
        image="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg"
      />

      <section className="py-20 md:py-28 bg-sand-50">
        <div className="container-lux">
          {/* Filters */}
          <Reveal>
            <div className="flex flex-wrap gap-3 mb-14">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-5 py-2.5 text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
                    active === c
                      ? 'bg-ink-900 text-sand-50'
                      : 'border border-ink-300 text-ink-600 hover:border-ink-900 hover:text-ink-900'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 120}>
                <button onClick={() => onNavigate('/contact')} className="group block w-full text-left">
                  <div className="overflow-hidden aspect-[16/11] mb-5 relative">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/20 transition-colors duration-500" />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-sand-50/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ArrowUpRight size={18} className="text-ink-900" />
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-accent-600 mb-2">{p.category} · {p.location}</p>
                      <h3 className="font-serif text-2xl text-ink-900 group-hover:text-accent-600 transition-colors">{p.title}</h3>
                      <p className="text-ink-500 text-sm mt-2 leading-relaxed max-w-md">{p.description}</p>
                    </div>
                    <span className="text-sm text-ink-400 shrink-0">{p.year}</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
