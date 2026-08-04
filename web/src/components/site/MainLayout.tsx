import { Outlet, NavLink, Link } from 'react-router-dom';
import { Menu, Phone, Search, Shield, Languages, MoonStar } from 'lucide-react';
import { brand, navItems } from '@/data/site';
import { MagneticButton } from './UI';
import { useState } from 'react';

export const MainLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 bg-radial opacity-90" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_10%,transparent_90%,rgba(255,255,255,0.03))]" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/brand/logo.svg" alt={brand.name} className="h-12 w-auto rounded-xl border border-white/10 bg-black/40 p-1" />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `group relative text-sm font-medium ${isActive ? 'text-brand-gold' : 'text-white/70'}`}>
                {item.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <button className="rounded-full border border-white/10 bg-white/5 p-3 text-white/70 transition hover:text-brand-gold"><Search size={16} /></button>
            <button className="rounded-full border border-white/10 bg-white/5 p-3 text-white/70 transition hover:text-brand-gold"><Languages size={16} /></button>
            <button className="rounded-full border border-white/10 bg-white/5 p-3 text-white/70 transition hover:text-brand-gold"><MoonStar size={16} /></button>
            <a href={`tel:${brand.phones[0].replace(/\s+/g, '')}`} className="rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-3 text-sm font-semibold text-brand-orange">Emergency Call</a>
            <MagneticButton href="/booking">Request Quote</MagneticButton>
          </div>
          <button onClick={() => setOpen((v) => !v)} className="rounded-full border border-white/10 bg-white/5 p-3 text-white lg:hidden"><Menu size={18} /></button>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-black/95 px-4 py-4 lg:hidden">
            <div className="grid gap-3">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                  {item.label}
                </NavLink>
              ))}
              <a href={`tel:${brand.phones[0].replace(/\s+/g, '')}`} className="flex items-center justify-center gap-2 rounded-2xl border border-brand-orange/40 bg-brand-orange/10 px-4 py-3 text-brand-orange"><Phone size={16} /> Emergency Call</a>
            </div>
          </div>
        )}
      </header>
      <main className="relative z-10">
        <Outlet />
      </main>
      <footer className="relative z-10 mt-20 border-t border-white/10 bg-black/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
          <div className="space-y-4 md:col-span-2">
            <img src="/brand/logo.svg" alt={brand.name} className="h-14 w-auto" />
            <p className="max-w-xl text-white/65">Luxury-grade security and facility management for businesses, industries, hospitals, schools, retail destinations and residential communities.</p>
            <div className="flex flex-wrap gap-3 text-sm text-white/60">
              {brand.values.map((value) => <span key={value} className="rounded-full border border-brand-gold/20 bg-white/5 px-4 py-2">{value}</span>)}
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg text-brand-gold">Quick Links</h3>
            <div className="mt-4 grid gap-3 text-white/65">
              {navItems.map((item) => <Link key={item.to} to={item.to} className="transition hover:text-brand-gold">{item.label}</Link>)}
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg text-brand-gold">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/65">
              <p>{brand.address}</p>
              <a href={`mailto:${brand.email}`} className="transition hover:text-brand-gold">{brand.email}</a>
              {brand.phones.map((phone) => <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="transition hover:text-brand-gold">{phone}</a>)}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs uppercase tracking-[0.3em] text-white/35">© 2026 TRIGUN SECURITY FORCE & FACILITY MANAGEMENT</div>
      </footer>
      <a href="https://wa.me/917745876301" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 rounded-full border border-brand-gold/40 bg-gradient-to-r from-brand-orange to-brand-gold px-5 py-4 text-sm font-bold text-black shadow-gold">Live Chat</a>
      <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 rotate-180 writing-vertical-rl text-[10px] uppercase tracking-[0.45em] text-white/25 xl:block">Trusted • Reliable • Integral</div>
    </div>
  );
};
