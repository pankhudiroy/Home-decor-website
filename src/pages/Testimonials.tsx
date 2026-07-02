import { Star, Quote } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <div>
      <PageHero
        eyebrow="Testimonials"
        title="Words from those who live in our work"
        subtitle="The measure of a space is how it feels to come home to it. Here's what our clients say."
        // image="https://images.pexels.com/photos/3754399/pexels-photo-3754399.jpeg?auto=compress&cs=tinysrgb&w=1920"
        image="https://images.pexels.com/photos/7222025/pexels-photo-7222025.jpeg"
      />

      <section className="py-24 md:py-32 bg-sand-50">
        <div className="container-lux">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={(i % 2) * 120}>
                <figure className="bg-sand-100 p-8 md:p-10 h-full flex flex-col">
                  <Quote size={32} className="text-accent-500 mb-5" strokeWidth={1.5} />
                  <blockquote className="font-serif text-xl md:text-2xl text-ink-800 leading-relaxed italic flex-grow">
                    "{t.quote}"
                  </blockquote>
                  <div className="flex gap-1 mt-6">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={16} className="text-accent-500 fill-accent-500" />
                    ))}
                  </div>
                  <figcaption className="flex items-center gap-4 mt-6 pt-6 border-t border-sand-200">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-ink-900">{t.name}</p>
                      <p className="text-sm text-ink-400">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-20 bg-ink-900 text-sand-100">
        <div className="container-lux grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { n: '240+', l: 'Projects Delivered' },
            { n: '15', l: 'Years of Practice' },
            { n: '98%', l: 'Client Referrals' },
            { n: '4.9', l: 'Average Rating' },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <p className="font-serif text-5xl text-sand-50">{s.n}</p>
              <p className="text-xs tracking-widest uppercase text-ink-300 mt-2">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
