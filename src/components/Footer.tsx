import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { navLinks } from '../data/nav';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-ink-900 text-sand-100">
      <div className="container-lux py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-serif text-2xl text-sand-50 mb-4">
            Home<span className="text-accent-400">Decors</span>
          </h3>
          <p className="text-sm text-ink-200 leading-relaxed max-w-xs">
            Crafting timeless, luxurious interiors that reflect your story. Designing spaces where elegance meets comfort.
          </p>
          <div className="flex gap-4 mt-6">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-ink-600 hover:border-accent-400 hover:text-accent-400 transition-colors"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-sand-50 mb-5">Explore</h4>
          <ul className="grid grid-cols-2 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => onNavigate(link.path)}
                  className="text-sm text-ink-200 hover:text-accent-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-sand-50 mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-ink-200">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-accent-400 shrink-0" />
              <span>24 Atelier Lane, Design District, New York, NY 10013</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-accent-400 shrink-0" />
              <span>+1 (212) 555-0184</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent-400 shrink-0" />
              <span>hello@homedecors.studio</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-sand-50 mb-5">Newsletter</h4>
          <p className="text-sm text-ink-200 mb-4">Inspiration delivered monthly. No noise, just design.</p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent border border-ink-600 px-4 py-3 text-sm text-sand-50 placeholder-ink-400 focus:outline-none focus:border-accent-400 transition-colors"
            />
            <button className="btn-primary bg-accent-500 hover:bg-accent-400 text-ink-900">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-ink-700">
        <div className="container-lux py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-300">
          <p>© {new Date().getFullYear()} Home Decors Interior Design. All rights reserved.</p>
          <p className="tracking-widest uppercase">Designed with intention</p>
        </div>
      </div>
    </footer>
  );
}
