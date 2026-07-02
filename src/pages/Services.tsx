import { Check, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { services } from '../data/services';

interface ServicesProps {
  onNavigate: (path: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Full-service interior design, end to end"
        subtitle="From first consultation to final styling, we offer a complete range of design services tailored to your space and scope."
        image="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Services list */}
      <section className="py-24 md:py-32 bg-sand-50">
        <div className="container-lux space-y-20 md:space-y-28">
          {services.map((s, i) => (
            <Reveal key={s.id}>
              <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-accent-600 mb-3">0{i + 1}</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-ink-900 mb-5">{s.title}</h2>
                  <p className="text-ink-600 leading-relaxed mb-7">{s.description}</p>
                  <ul className="grid grid-cols-2 gap-y-3 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-ink-700">
                        <Check size={16} className="text-accent-600 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => onNavigate('/contact')} className="text-sm tracking-widest uppercase text-ink-900 hover:text-accent-600 transition-colors flex items-center gap-2 border-b border-ink-900 hover:border-accent-600 pb-1">
                    Enquire <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process teaser */}
      <section className="py-24 bg-ink-900 text-sand-100">
        <div className="container-lux text-center">
          <Reveal>
            <p className="section-eyebrow text-accent-400">How We Work</p>
            <h2 className="font-serif text-4xl md:text-5xl text-sand-50">A clear, considered process</h2>
            <p className="mt-6 text-ink-200 max-w-xl mx-auto leading-relaxed">
              Five stages, from discovery to the final styled detail. Transparent at every step.
            </p>
            <button onClick={() => onNavigate('/process')} className="btn-primary bg-sand-50 text-ink-900 hover:bg-accent-400 mt-8">
              See Our Process <ArrowRight size={16} />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
