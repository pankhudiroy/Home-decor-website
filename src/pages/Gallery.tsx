import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { galleryItems } from '../data/gallery';

export default function Gallery() {
  const categories = ['All', ...Array.from(new Set(galleryItems.map((g) => g.category)))];
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(() => setLightbox((p) => (p === null ? null : (p + 1) % filtered.length)), [filtered.length]);
  const prev = useCallback(() => setLightbox((p) => (p === null ? null : (p - 1 + filtered.length) % filtered.length)), [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, next, prev]);

  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title="Moments from our finished spaces"
        subtitle="A visual archive of rooms, details, and the textures that define our work."
        image="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 md:py-28 bg-sand-50">
        <div className="container-lux">
          <Reveal>
            <div className="flex flex-wrap gap-3 mb-12">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((g, i) => (
              <Reveal key={g.id} delay={(i % 4) * 80}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative block w-full aspect-square overflow-hidden"
                >
                  <img src={g.image} alt={g.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/40 transition-colors duration-500 flex items-end p-4">
                    <p className="text-sand-50 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {g.title}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] bg-ink-900/95 flex items-center justify-center animate-fade-in" onClick={close}>
          <button className="absolute top-6 right-6 text-sand-50 hover:text-accent-400 transition-colors p-2" onClick={close} aria-label="Close">
            <X size={28} />
          </button>
          <button
            className="absolute left-4 md:left-8 text-sand-50 hover:text-accent-400 transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>
          <figure className="max-w-4xl max-h-[85vh] px-6" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightbox].image} alt={filtered[lightbox].title} className="max-h-[78vh] w-auto object-contain mx-auto" />
            <figcaption className="text-center mt-4 text-sand-100">
              <p className="font-serif text-xl">{filtered[lightbox].title}</p>
              <p className="text-xs tracking-widest uppercase text-ink-300 mt-1">{filtered[lightbox].category}</p>
            </figcaption>
          </figure>
          <button
            className="absolute right-4 md:right-8 text-sand-50 hover:text-accent-400 transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}
