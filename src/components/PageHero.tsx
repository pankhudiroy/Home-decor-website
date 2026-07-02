import Reveal from './Reveal';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHero({ eyebrow, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/40 to-ink-900/30" />
      </div>
      <div className="container-lux relative z-10 pb-14">
        <Reveal>
          <p className="section-eyebrow text-accent-300">{eyebrow}</p>
          <h1 className="font-serif text-5xl md:text-6xl text-sand-50 leading-tight max-w-2xl">{title}</h1>
          <p className="mt-5 text-sand-100/90 max-w-xl leading-relaxed">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
