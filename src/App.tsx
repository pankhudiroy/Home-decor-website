import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Process from './pages/Process';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

function getRoute(): string {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

export default function App() {
  const [path, setPath] = useState(getRoute());

  useEffect(() => {
    const onHash = () => setPath(getRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to;
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const renderPage = () => {
    switch (path) {
      case '/about': return <About onNavigate={navigate} />;
      case '/services': return <Services onNavigate={navigate} />;
      case '/portfolio': return <Portfolio onNavigate={navigate} />;
      case '/process': return <Process onNavigate={navigate} />;
      case '/gallery': return <Gallery />;
      case '/testimonials': return <Testimonials />;
      case '/blogs': return <Blogs />;
      case '/contact': return <Contact />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPath={path} onNavigate={navigate} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </div>
  );
}
