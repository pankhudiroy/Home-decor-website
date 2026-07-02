import { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { blogPosts } from '../data/blogs';

export default function Blogs() {
  const categories = ['All', ...Array.from(new Set(blogPosts.map((b) => b.category)))];
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? blogPosts : blogPosts.filter((b) => b.category === active);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div>
      <PageHero
        eyebrow="Journal"
        title="Notes on design, materials, and living well"
        subtitle="Essays and guides from our studio — on the craft of making spaces that last."
        image="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1920"
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

          {/* Featured */}
          {featured && (
            <Reveal>
              <article className="grid md:grid-cols-2 gap-10 items-center mb-20 group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-accent-600 mb-3">Featured · {featured.category}</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-ink-900 leading-tight mb-4 group-hover:text-accent-600 transition-colors">{featured.title}</h2>
                  <p className="text-ink-600 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-ink-400">
                    <span>{featured.author}</span>
                    <span>·</span>
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {featured.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 mt-6 text-sm tracking-widest uppercase text-ink-900 border-b border-ink-900 pb-1">
                    Read Article <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Reveal>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {rest.map((b, i) => (
              <Reveal key={b.id} delay={(i % 3) * 100}>
                <article className="group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden mb-5">
                    <img src={b.image} alt={b.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="text-xs tracking-widest uppercase text-accent-600 mb-2">{b.category}</p>
                  <h3 className="font-serif text-xl text-ink-900 leading-snug mb-3 group-hover:text-accent-600 transition-colors">{b.title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed mb-4">{b.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-ink-400">
                    <span>{b.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {b.readTime}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
