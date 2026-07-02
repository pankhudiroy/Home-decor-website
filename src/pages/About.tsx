import { Award, Heart, Leaf, Compass } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

interface AboutProps {
  onNavigate: (path: string) => void;
}

const values = [
  { icon: Compass, title: 'Intention', text: 'Every decision serves the way you live. Nothing is arbitrary.' },
  { icon: Leaf, title: 'Materiality', text: 'Natural, honest materials that gain character with time.' },
  { icon: Heart, title: 'Warmth', text: 'Luxury that invites you in rather than keeping you at a distance.' },
  { icon: Award, title: 'Craft', text: 'Meticulous detailing and trusted artisans on every build.' },
];

const team = [
  { name: 'Isabelle Laurent', role: 'Founder & Principal Designer', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Marcus Reed', role: 'Senior Designer', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Sofia Marchetti', role: 'Project Lead', image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'David Chen', role: 'Design Architect', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export default function About({ onNavigate }: AboutProps) {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="A studio rooted in restraint and warmth"
        subtitle="Since 2009, we've shaped interiors that feel personal, considered, and built to last."
        image="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Story */}
      <section className="py-24 md:py-32 bg-sand-50">
        <div className="container-lux grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden">
              <img src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Studio" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="section-eyebrow">Our Story</p>
            <h2 className="section-title mb-6">From a small atelier to a full-service studio</h2>
            <div className="space-y-5 text-ink-600 leading-relaxed">
              <p>Home Decors began in a modest studio in 2009, founded on a simple conviction: that great interiors are not about trends, but about the people who live in them.</p>
              <p>Fifteen years and over two hundred and forty projects later, that conviction still guides us. We work across residential, commercial, and hospitality sectors, but our approach never changes — listen first, design with intention, and build with care.</p>
              <p>Today our team of designers, architects, and project leads collaborates from studios in New York and London, serving clients who value quiet luxury and lasting quality.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-ink-900 text-sand-100">
        <div className="container-lux">
          <Reveal>
            <p className="section-eyebrow text-accent-400">What Guides Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-sand-50 max-w-2xl">Four principles, every project</h2>
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <v.icon size={32} className="text-accent-400 mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-sand-50 mb-3">{v.title}</h3>
                <p className="text-ink-200 text-sm leading-relaxed">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-sand-50">
        <div className="container-lux">
          <Reveal>
            <p className="section-eyebrow">The People</p>
            <h2 className="section-title max-w-2xl">Meet the studio</h2>
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
                <div className="group">
                  <div className="aspect-[3/4] overflow-hidden mb-5">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="font-serif text-xl text-ink-900">{m.name}</h3>
                  <p className="text-sm text-ink-400 mt-1">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sand-100">
        <div className="container-lux text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-ink-900">Want to work together?</h2>
            <button onClick={() => onNavigate('/contact')} className="btn-primary mt-8">Get in Touch</button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
