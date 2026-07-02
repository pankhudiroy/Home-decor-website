import { Search, PencilRuler, Layers, Hammer, Sparkles } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

interface ProcessProps {
  onNavigate: (path: string) => void;
}

const steps = [
  { icon: Search, num: '01', title: 'Discovery', text: 'We meet, listen, and learn how you live or work. We tour the space, discuss budget and timeline, and define the brief together.' },
  { icon: PencilRuler, num: '02', title: 'Concept', text: 'Mood boards, palette, and spatial concepts take shape. We present a clear creative direction for your approval before any detail is drawn.' },
  { icon: Layers, num: '03', title: 'Design Development', text: 'Drawings, 3D visuals, material selections, and finishes are refined. Every element is specified and costed with transparency.' },
  { icon: Hammer, num: '04', title: 'Build & Procure', text: 'We coordinate contractors, order furnishings, and manage the build. You receive regular updates and a single point of contact.' },
  { icon: Sparkles, num: '05', title: 'Styling & Handover', text: 'Furniture is installed, art is hung, and the final styling is completed. We hand over a finished, ready-to-live-in space.' },
];

export default function Process({ onNavigate }: ProcessProps) {
  return (
    <div>
      <PageHero
        eyebrow="Process"
        title="A clear path from idea to completion"
        subtitle="Five considered stages that keep every project transparent, collaborative, and on track."
        image="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Steps */}
      <section className="py-24 md:py-32 bg-sand-50">
        <div className="container-lux max-w-4xl">
          <div className="relative">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-sand-200 md:-translate-x-px" />
            <div className="space-y-16">
              {steps.map((s, i) => (
                <Reveal key={s.num} delay={i * 80}>
                  <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Node */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                      <div className="w-14 h-14 rounded-full bg-ink-900 text-sand-50 flex items-center justify-center shrink-0">
                        <s.icon size={22} strokeWidth={1.5} />
                      </div>
                    </div>
                    {/* Content */}
                    <div className={`pl-20 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <p className="font-serif text-5xl text-sand-300 mb-2">{s.num}</p>
                      <h3 className="font-serif text-2xl md:text-3xl text-ink-900 mb-3">{s.title}</h3>
                      <p className="text-ink-600 leading-relaxed">{s.text}</p>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink-900 text-sand-100">
        <div className="container-lux text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-sand-50">Ready to begin?</h2>
            <p className="mt-4 text-ink-200 max-w-lg mx-auto">Book a discovery call and let's map out your project together.</p>
            <button onClick={() => onNavigate('/contact')} className="btn-primary bg-sand-50 text-ink-900 hover:bg-accent-400 mt-8">
              Book a Consultation
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
