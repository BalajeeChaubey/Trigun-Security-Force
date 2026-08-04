import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

export const SectionHeading = ({ eyebrow, title, body, center = false }: { eyebrow: string; title: string; body: string; center?: boolean }) => (
  <div className={cn('max-w-3xl space-y-4', center && 'mx-auto text-center')}>
    <p className="inline-flex rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">{eyebrow}</p>
    <h2 className="font-heading text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
    <p className="text-base leading-8 text-white/70 md:text-lg">{body}</p>
  </div>
);

export const GlassCard = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <motion.div
    whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
    transition={{ type: 'spring', stiffness: 180, damping: 18 }}
    className={cn('group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl', className)}
  >
    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
      <div className="absolute -left-20 top-0 h-full w-24 animate-sheen bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
    </div>
    {children}
  </motion.div>
);

export const StatCounter = ({ value, label }: { value: string; label: string }) => (
  <GlassCard className="min-h-[130px]">
    <p className="font-heading text-3xl font-bold text-brand-gold md:text-4xl">{value}</p>
    <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/55">{label}</p>
  </GlassCard>
);

export const MagneticButton = ({ children, className, href, onClick }: { children: React.ReactNode; className?: string; href?: string; onClick?: () => void }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseMove={(event) => {
        const rect = (event.currentTarget as HTMLAnchorElement).getBoundingClientRect();
        setOffset({ x: (event.clientX - rect.left - rect.width / 2) * 0.12, y: (event.clientY - rect.top - rect.height / 2) * 0.18 });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className={cn('inline-flex items-center justify-center rounded-full border border-brand-gold/40 bg-gradient-to-r from-brand-orange to-brand-gold px-6 py-3 font-semibold text-black shadow-gold transition-all duration-300 hover:scale-[1.02]', className)}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
    >
      {children}
    </a>
  );
};

export const ProgressLine = ({ value }: { value: number }) => (
  <div className="h-2 overflow-hidden rounded-full bg-white/10">
    <motion.div initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full rounded-full bg-gradient-to-r from-brand-orange to-brand-gold" />
  </div>
);

export const FloatingBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex animate-float items-center rounded-full border border-brand-gold/20 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.28em] text-brand-gold">
    {children}
  </span>
);

export const useCycleText = (items: string[]) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % items.length), 2200);
    return () => clearInterval(timer);
  }, [items.length]);
  return useMemo(() => items[index], [index, items]);
};
