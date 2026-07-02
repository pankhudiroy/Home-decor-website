import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let's begin a conversation"
        subtitle="Tell us about your space, your timeline, and how you hope to live in it. We'll be in touch within two business days."
        // image="https://images.pexels.com/photos/3754399/pexels-photo-3754399.jpeg?auto=compress&cs=tinysrgb&w=1920"
        image="https://images.pexels.com/photos/6177670/pexels-photo-6177670.jpeg"
      />

      <section className="py-24 md:py-32 bg-sand-50">
        <div className="container-lux grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <p className="section-eyebrow">Studio Details</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink-900 mb-8">Reach the studio</h2>
            <ul className="space-y-7">
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 bg-sand-100 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent-600" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-ink-400 mb-1">Studio</p>
                  <p className="text-ink-700">24 Atelier Lane, Design District<br />New York, NY 10013</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 bg-sand-100 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-accent-600" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-ink-400 mb-1">Phone</p>
                  <p className="text-ink-700">+1 (212) 555-0184</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 bg-sand-100 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-accent-600" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-ink-400 mb-1">Email</p>
                  <p className="text-ink-700">hello@homedecors.studio</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 bg-sand-100 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-accent-600" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-ink-400 mb-1">Hours</p>
                  <p className="text-ink-700">Mon–Fri, 9:00 – 18:00<br />Sat by appointment</p>
                </div>
              </li>
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-3" delay={150}>
            <div className="bg-sand-100 p-8 md:p-12">
              <h2 className="font-serif text-3xl text-ink-900 mb-2">Project Enquiry</h2>
              <p className="text-ink-500 mb-8 text-sm">Fields marked with * are required.</p>
              {sent && (
                <div className="flex items-center gap-3 bg-accent-100 text-accent-700 px-5 py-4 mb-6 animate-fade-in">
                  <CheckCircle2 size={20} />
                  <p className="text-sm">Thank you — your message has been sent. We'll be in touch shortly.</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-ink-500 mb-2">Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="w-full bg-transparent border-b border-ink-300 py-3 text-ink-900 focus:outline-none focus:border-accent-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-ink-500 mb-2">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="w-full bg-transparent border-b border-ink-300 py-3 text-ink-900 focus:outline-none focus:border-accent-600 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-ink-500 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full bg-transparent border-b border-ink-300 py-3 text-ink-900 focus:outline-none focus:border-accent-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-ink-500 mb-2">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full bg-transparent border-b border-ink-300 py-3 text-ink-900 focus:outline-none focus:border-accent-600 transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full md:w-auto">
                  Send Enquiry <Send size={16} />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-sand-100">
        <div className="container-lux py-12">
          <Reveal>
            <div className="relative w-full h-[400px] bg-ink-100 overflow-hidden border border-sand-200">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <MapPin size={40} className="text-accent-600 mb-4" strokeWidth={1.5} />
                <p className="font-serif text-2xl text-ink-900 mb-2">Find us in the Design District</p>
                <p className="text-ink-500 text-sm max-w-md">24 Atelier Lane, New York, NY 10013. Google Maps integration will render here.</p>
              </div>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
