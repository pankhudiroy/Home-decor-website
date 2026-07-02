import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/nav';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (path: string) => {
    onNavigate(path);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-sand-50/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-lux flex items-center justify-between">
        <button
          onClick={() => handleNav('/')}
          className="flex items-center gap-2 group"
          aria-label="Home Decors home"
        >
          <span className={`font-serif text-2xl tracking-tight transition-colors ${scrolled ? 'text-ink-900' : 'text-ink-900'}`}>
            Home<span className="text-accent-600">Decors</span>
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const active = currentPath === link.path;
            return (
              <li key={link.path}>
                <button
                  onClick={() => handleNav(link.path)}
                  className={`text-xs tracking-widest uppercase font-medium transition-colors duration-300 relative ${
                    active ? 'text-accent-600' : scrolled ? 'text-ink-700 hover:text-accent-600' : 'text-ink-700 hover:text-accent-600'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1.5 left-0 h-px bg-accent-600 transition-all duration-300 ${active ? 'w-full' : 'w-0'}`} />
                </button>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-ink-900 p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-lux flex flex-col gap-1 pt-6 pb-8 bg-sand-50">
          {navLinks.map((link) => {
            const active = currentPath === link.path;
            return (
              <li key={link.path}>
                <button
                  onClick={() => handleNav(link.path)}
                  className={`block w-full text-left py-3 text-sm tracking-widest uppercase font-medium border-b border-sand-200 transition-colors ${
                    active ? 'text-accent-600' : 'text-ink-700'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
