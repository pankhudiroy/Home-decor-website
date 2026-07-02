import { ArrowRight, Star } from 'lucide-react';
import Reveal from '../components/Reveal';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxurious interior"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 via-ink-900/40 to-transparent" />
        </div>
        <div className="container-lux relative z-10">
          <Reveal>
            <p className="text-accent-300 text-xs tracking-widest uppercase font-medium mb-5">
              Interior Design Studio · Est. 2009
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-sand-50 leading-[1.05] max-w-3xl">
              Spaces that tell<br />your story
            </h1>
            <p className="mt-7 text-sand-100/90 text-lg max-w-xl leading-relaxed">
              We craft timeless, luxurious interiors where every detail is intentional and every room feels unmistakably yours.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => onNavigate('/portfolio')} className="btn-primary bg-sand-50 text-ink-900 hover:bg-accent-400">
                View Our Work <ArrowRight size={16} />
              </button>
              <button onClick={() => onNavigate('/contact')} className="btn-outline border-sand-50 text-sand-50 hover:bg-sand-50 hover:text-ink-900">
                Start a Project
              </button>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-sand-50/70">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <span className="w-px h-12 bg-sand-50/40 animate-pulse" />
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="py-24 md:py-32 bg-sand-50">
        <div className="container-lux grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="section-eyebrow">Our Philosophy</p>
            <h2 className="section-title">Design with intention,<br />built to be lived in.</h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-ink-600 leading-relaxed text-lg">
              For over fifteen years, Home Decors has shaped interiors that balance restraint with warmth. We believe great design is not about more — it is about the right materials, the right light, and the right rhythm of space. The result: rooms that feel considered, calm, and completely your own.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { n: '240+', l: 'Projects' },
                { n: '15', l: 'Years' },
                { n: '98%', l: 'Referrals' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-serif text-4xl text-ink-900">{s.n}</p>
                  <p className="text-xs tracking-widest uppercase text-ink-400 mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 md:py-32 bg-ink-900 text-sand-100">
        <div className="container-lux">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <Reveal>
              <p className="section-eyebrow text-accent-400">What We Do</p>
              <h2 className="font-serif text-4xl md:text-5xl text-sand-50">Services crafted around you</h2>
            </Reveal>
            <Reveal delay={150}>
              <button onClick={() => onNavigate('/services')} className="text-sm tracking-widest uppercase text-accent-400 hover:text-sand-50 transition-colors flex items-center gap-2">
                All Services <ArrowRight size={16} />
              </button>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((s, i) => (
              <Reveal key={s.id} delay={i * 120}>
                <button onClick={() => onNavigate('/services')} className="group text-left w-full">
                  <div className="overflow-hidden mb-6 aspect-[4/5]">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="font-serif text-2xl text-sand-50 mb-3 group-hover:text-accent-400 transition-colors">{s.title}</h3>
                  <p className="text-ink-200 text-sm leading-relaxed">{s.description}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-24 md:py-32 bg-sand-50">
        <div className="container-lux">
          <Reveal>
            <p className="section-eyebrow">Selected Work</p>
            <h2 className="section-title max-w-2xl">A portfolio shaped by place and light</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <button onClick={() => onNavigate('/portfolio')} className="group block w-full text-left">
                  <div className="overflow-hidden aspect-[16/10] mb-5">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-accent-600 mb-2">{p.category} · {p.year}</p>
                      <h3 className="font-serif text-2xl text-ink-900 group-hover:text-accent-600 transition-colors">{p.title}</h3>
                    </div>
                    <ArrowRight size={20} className="text-ink-400 group-hover:text-accent-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial feature */}
      <section className="py-24 md:py-32 bg-sand-100">
        <div className="container-lux max-w-4xl text-center">
          <Reveal>
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-accent-500 fill-accent-500" />
              ))}
            </div>
            <blockquote className="font-serif text-3xl md:text-4xl text-ink-900 leading-snug italic">
              "{testimonials[0].quote}"
            </blockquote>
            <div className="mt-8">
              <p className="font-medium text-ink-900">{testimonials[0].name}</p>
              <p className="text-sm text-ink-400">{testimonials[0].role}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink-900/75" />
        </div>
        <div className="container-lux relative z-10 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-6xl text-sand-50 leading-tight max-w-2xl mx-auto">
              Let's design something lasting.
            </h2>
            <p className="mt-6 text-sand-100/90 max-w-xl mx-auto leading-relaxed">
              Whether it's a single room or a full home, we'd love to hear about your space.
            </p>
            <button onClick={() => onNavigate('/contact')} className="btn-primary bg-sand-50 text-ink-900 hover:bg-accent-400 mt-10">
              Begin Your Project <ArrowRight size={16} />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
