import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Banknote, Building2, CalendarRange, CheckCircle2, Crown, Factory, FileSpreadsheet, GraduationCap, HandCoins, HeartPulse, Hotel, House, Landmark, LayoutDashboard, MapPinned, ShieldCheck, ShieldPlus, Star, Store, UserCheck, Warehouse } from 'lucide-react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { brand, faqs, heroStats, industries, reasons, services, testimonials, trustLogos, blogPosts } from '@/data/site';
import { formatINR } from '@/lib/utils';
import { GlassCard, MagneticButton, ProgressLine, SectionHeading, StatCounter, FloatingBadge, useCycleText } from './UI';
import { ShieldScene } from './ShieldScene';
import gsap from 'gsap';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const iconMap = { Building2, Factory, House, ShieldPlus, GraduationCap, Crown, LayoutDashboard, UserCheck, Warehouse, Hotel, Landmark, Store } as const;

export const HeroSection = () => {
  const heroWord = useCycleText(['Corporate', 'Industrial', 'Healthcare', 'Residential']);
  useEffect(() => {
    gsap.fromTo('.hero-copy', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.14, duration: 1, ease: 'power3.out' });
  }, []);
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,140,0,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.16),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.2),#000)]" />
      <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-4 py-20 md:px-6 lg:grid-cols-[1.1fr_.9fr]">
        <div className="relative z-10 space-y-8">
          <FloatingBadge>Premium Security Architecture</FloatingBadge>
          <div className="space-y-6">
            <p className="hero-copy text-sm uppercase tracking-[0.35em] text-brand-orange">Professional Security Solutions</p>
            <h1 className="hero-copy max-w-4xl font-heading text-5xl font-semibold leading-[1.05] text-white md:text-7xl">Protecting What Matters Most for <span className="bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange bg-clip-text text-transparent">{heroWord}</span> environments.</h1>
            <p className="hero-copy max-w-2xl text-lg leading-8 text-white/72">Highly trained security professionals protecting businesses, industries, hospitals, schools and residential communities with disciplined field execution, polished reporting and rapid support.</p>
          </div>
          <div className="hero-copy flex flex-wrap gap-4">
            <MagneticButton href="/booking">Request Security</MagneticButton>
            <a href="/services" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-brand-gold/35 hover:text-brand-gold">Hire Guards</a>
            <a href="#company-profile" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/40 px-6 py-3 font-semibold text-white/80 transition hover:border-brand-orange/35 hover:text-brand-orange">Watch Company Profile</a>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {heroStats.map((stat) => <StatCounter key={stat.label} value={stat.value} label={stat.label} />)}
          </div>
        </div>
        <div className="relative h-[520px] min-h-[420px] rounded-[32px] border border-white/10 bg-white/5 shadow-glass backdrop-blur-2xl">
          <div className="absolute inset-0 rounded-[32px] bg-[url('/brand/business-card-pattern.svg')] bg-cover bg-center opacity-45" />
          <div className="absolute inset-0"><ShieldScene /></div>
          <div className="absolute bottom-6 left-6 right-6 grid gap-4 md:grid-cols-2">
            <GlassCard className="bg-black/55 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-orange">Trusted Response Grid</p>
              <p className="mt-2 font-heading text-xl text-white">Guard + Facility + Reporting</p>
            </GlassCard>
            <GlassCard className="bg-black/55 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Luxury-grade Command Presence</p>
              <p className="mt-2 font-heading text-xl text-white">Maharashtra-ready deployment</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TrustSection = () => (
  <section className="overflow-hidden border-b border-white/10 py-8">
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <p className="mb-5 text-center text-xs uppercase tracking-[0.55em] text-white/40">Trusted in premium environments</p>
      <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/5 py-4 backdrop-blur-xl">
        <div className="flex min-w-max animate-marquee gap-8 px-8">
          {[...trustLogos, ...trustLogos].map((item, index) => (
            <div key={`${item}-${index}`} className="rounded-full border border-brand-gold/15 bg-black/45 px-6 py-2 text-sm uppercase tracking-[0.28em] text-white/70">{item}</div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const AboutSection = () => (
  <section id="company-profile" className="mx-auto grid max-w-7xl gap-8 px-4 py-24 md:px-6 lg:grid-cols-[1fr_1.1fr]">
    <div className="space-y-6">
      <SectionHeading eyebrow="About TRIGUN" title="A premium security identity built on trust, reliability and integral discipline." body="The company is shaped for decision-makers who need dependable manpower, executive presentation and measurable field performance. From corporate campuses to hospitals and housing communities, every deployment is designed to elevate safety confidence while preserving service elegance." />
      <div className="grid gap-4 md:grid-cols-3">
        {brand.values.map((value) => (
          <GlassCard key={value}><p className="text-sm uppercase tracking-[0.25em] text-brand-gold">{value}</p></GlassCard>
        ))}
      </div>
      <GlassCard>
        <p className="text-sm uppercase tracking-[0.3em] text-brand-orange">Mission</p>
        <p className="mt-3 text-white/70">{brand.mission}</p>
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-brand-gold">Vision</p>
        <p className="mt-3 text-white/70">{brand.vision}</p>
      </GlassCard>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      <GlassCard className="md:col-span-2">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">CEO Message</p>
            <p className="mt-4 text-white/70">We combine professionalism, verification, discipline and responsiveness so clients experience security that feels premium, dependable and quietly powerful.</p>
          </div>
          <div className="rounded-full border border-brand-gold/30 bg-brand-gold/10 p-4"><ShieldCheck className="text-brand-gold" /></div>
        </div>
      </GlassCard>
      <GlassCard>
        <p className="text-xs uppercase tracking-[0.35em] text-brand-orange">Timeline</p>
        <div className="mt-5 space-y-4 text-sm text-white/70">
          <p><span className="text-brand-gold">01</span> Strategy-led recruitment and verification pipeline</p>
          <p><span className="text-brand-gold">02</span> Premium uniforms, training and field discipline</p>
          <p><span className="text-brand-gold">03</span> Reporting, attendance and escalation structure</p>
        </div>
      </GlassCard>
      <GlassCard>
        <p className="text-xs uppercase tracking-[0.35em] text-brand-orange">Director Message</p>
        <p className="mt-4 text-white/70">Every assignment is treated as a reputation-critical operation where presence, conduct and response quality matter equally.</p>
      </GlassCard>
    </div>
  </section>
);

export const WhyChooseUsSection = () => (
  <section className="border-y border-white/10 bg-white/[0.02] py-24">
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <SectionHeading eyebrow="Why Choose Us" title="A field-ready operating model designed for premium trust." body="High-visibility discipline, rapid deployment logic, verification-first recruitment and measurable operational support create a premium service experience across diverse sites." center />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {reasons.map((reason, index) => (
          <GlassCard key={reason} className="min-h-[180px] border-brand-gold/15">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.3em] text-brand-orange">0{index + 1}</span>
              <CheckCircle2 className="text-brand-gold" />
            </div>
            <p className="mt-10 font-heading text-xl text-white">{reason}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export const ServicesSection = () => (
  <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
    <SectionHeading eyebrow="Services" title="Luxury service cards for modern security and facility operations." body="Each service line is structured for presentation, reporting, responsiveness and client confidence." />
    <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => {
        const Icon = iconMap[service.icon as keyof typeof iconMap] ?? ShieldPlus;
        return (
          <GlassCard key={service.title} className="flex flex-col justify-between">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-gold/20 bg-brand-gold/10 text-brand-gold"><Icon size={26} /></div>
              <h3 className="mt-6 font-heading text-2xl text-white">{service.title}</h3>
              <p className="mt-4 text-white/70">{service.description}</p>
              <div className="mt-6 space-y-3 text-sm text-white/62">
                {service.features.map((feature) => <div key={feature} className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-orange" /> {feature}</div>)}
              </div>
            </div>
            <a href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Request consultation <ArrowRight size={16} /></a>
          </GlassCard>
        );
      })}
    </div>
  </section>
);

export const GuardShowcaseSection = () => (
  <section className="border-y border-white/10 py-24">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4">
        <img src="/brand/uniform-placeholder.svg" alt="Security uniform showcase" className="h-full w-full rounded-[24px] object-cover transition duration-700 hover:scale-[1.04]" />
      </div>
      <div className="space-y-6">
        <SectionHeading eyebrow="Security Guard Showcase" title="Presentation-ready uniforms, equipment detail and disciplined appearance." body="The guard showcase zone highlights the premium visual identity of deployment teams with uniform hierarchy, accessories, equipment-readiness and training standards." />
        <div className="grid gap-4 md:grid-cols-2">
          {['Uniform Components', 'Accessories', 'Training Information', 'Equipment Details'].map((item, index) => (
            <GlassCard key={item}>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-orange">Module 0{index + 1}</p>
              <p className="mt-4 font-heading text-xl text-white">{item}</p>
              <p className="mt-2 text-white/65">Structured to support a premium gallery and 360° presentation narrative.</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const IndustriesSection = () => (
  <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
    <SectionHeading eyebrow="Industries" title="Responsive deployment models across the sectors that demand trust." body="A modular service strategy supports corporate campuses, hospitals, schools, manufacturing zones, retail spaces, construction sites and residential communities." center />
    <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {industries.map((industry) => (
        <GlassCard key={industry.name}>
          <p className="text-xs uppercase tracking-[0.35em] text-brand-orange">{industry.metrics}</p>
          <h3 className="mt-4 font-heading text-2xl text-white">{industry.name}</h3>
          <p className="mt-4 text-white/70">{industry.summary}</p>
        </GlassCard>
      ))}
    </div>
  </section>
);

const bookingSchema = z.object({
  service: z.string().min(2),
  location: z.string().min(2),
  date: z.string().min(2),
  guards: z.coerce.number().min(1),
  duration: z.string().min(1),
});

type BookingForm = z.infer<typeof bookingSchema>;

export const BookingWizardSection = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors } } = useForm<BookingForm>({ resolver: zodResolver(bookingSchema), defaultValues: { guards: 4, duration: '12 Hours' } });
  const onSubmit = () => setStep(7);
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Live Booking" title="A premium multi-step inquiry flow for instant security deployment." body="The live booking experience converts high-intent visitors into qualified leads through a guided luxury-style wizard." />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard>
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">Booking Progress</p>
              <p className="text-sm text-white/55">Step {step} / 7</p>
            </div>
            <div className="mt-5"><ProgressLine value={(step / 7) * 100} /></div>
            <div className="mt-8 space-y-4 text-sm text-white/70">
              {['Select Service', 'Select Location', 'Choose Date', 'Number of Guards', 'Duration', 'Payment', 'Confirmation'].map((item, index) => (
                <div key={item} className={`rounded-2xl border px-4 py-3 ${step >= index + 1 ? 'border-brand-gold/40 bg-brand-gold/10 text-white' : 'border-white/10 bg-white/5'}`}>{item}</div>
              ))}
            </div>
          </GlassCard>
          <GlassCard>
            <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Service"><select {...register('service')} className="input-luxury"><option>Corporate Security</option><option>Industrial Security</option><option>Residential Security</option><option>Facility Management</option></select></Field>
                <Field label="Location"><input {...register('location')} defaultValue="Pune" className="input-luxury" /></Field>
                <Field label="Date"><input type="date" {...register('date')} className="input-luxury" /></Field>
                <Field label="Guards"><input type="number" min={1} {...register('guards')} className="input-luxury" /></Field>
                <Field label="Duration"><select {...register('duration')} className="input-luxury"><option>8 Hours</option><option>12 Hours</option><option>24 Hours</option><option>Monthly Contract</option></select></Field>
                <Field label="Payment"><select className="input-luxury"><option>Quotation Request</option><option>Advance Booking</option><option>Invoice Billing</option></select></Field>
              </div>
              {Object.values(errors).length > 0 && <p className="text-sm text-red-300">Please complete the booking fields correctly.</p>}
              <div className="flex flex-wrap gap-4">
                <MagneticButton href="#submit" onClick={() => undefined}>Confirm Request</MagneticButton>
                <button type="button" onClick={() => setStep((prev) => Math.min(prev + 1, 6))} className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/80">Next Step Preview</button>
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="grid gap-2 text-sm text-white/60">
    <span className="uppercase tracking-[0.25em]">{label}</span>
    {children}
  </label>
);

export const CalculatorSection = () => {
  const [guards, setGuards] = useState(4);
  const [hours, setHours] = useState(12);
  const [days, setDays] = useState(26);
  const [risk, setRisk] = useState(1.2);
  const estimate = useMemo(() => Math.round(guards * hours * days * 88 * risk), [guards, hours, days, risk]);
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <div className="grid gap-8 lg:grid-cols-[1fr_.95fr]">
        <div className="space-y-6">
          <SectionHeading eyebrow="AI Security Cost Calculator" title="Interactive quotation logic for faster client conversion." body="Estimate deployment cost based on location, industry, guard count, shift hours, working days and risk level. The module is structured for PDF quotation upgrades on the API layer." />
          <div className="grid gap-4 md:grid-cols-2">
            <GlassCard>
              <p className="text-sm uppercase tracking-[0.35em] text-brand-orange">Estimated Cost</p>
              <p className="mt-5 font-heading text-4xl text-white">{formatINR(estimate)}</p>
              <p className="mt-4 text-white/65">Dynamic estimate based on operational assumptions.</p>
            </GlassCard>
            <GlassCard>
              <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">PDF Quotations</p>
              <p className="mt-5 text-white/70">Backend route scaffold includes quotation generation support using PDFKit and lead capture endpoints.</p>
            </GlassCard>
          </div>
        </div>
        <GlassCard>
          <div className="grid gap-5">
            <RangeField label="Number of Guards" value={guards} setValue={setGuards} min={1} max={50} />
            <RangeField label="Hours per Shift" value={hours} setValue={setHours} min={4} max={24} />
            <RangeField label="Working Days" value={days} setValue={setDays} min={1} max={31} />
            <label className="grid gap-2 text-sm text-white/60">
              <span className="uppercase tracking-[0.25em]">Risk Level</span>
              <select value={risk} onChange={(e) => setRisk(Number(e.target.value))} className="input-luxury">
                <option value={1}>Standard</option>
                <option value={1.2}>Elevated</option>
                <option value={1.4}>Critical</option>
              </select>
            </label>
            <MagneticButton href="/contact">Generate PDF Quotation</MagneticButton>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

const RangeField = ({ label, value, setValue, min, max }: { label: string; value: number; setValue: (value: number) => void; min: number; max: number }) => (
  <label className="grid gap-2 text-sm text-white/60">
    <span className="flex items-center justify-between uppercase tracking-[0.25em]"><span>{label}</span><span className="text-brand-gold">{value}</span></span>
    <input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="accent-brand-orange" />
  </label>
);

export const DashboardPreviewSection = () => {
  const doughnut = { labels: ['On Duty', 'Patrolling', 'Emergency'], datasets: [{ data: [72, 18, 10], backgroundColor: ['#D4AF37', '#FF8C00', '#ffffff22'], borderWidth: 0 }] };
  const bar = { labels: ['Clients', 'Bookings', 'Invoices', 'Guards', 'Recruitment'], datasets: [{ label: 'Admin KPIs', data: [150, 96, 87, 500, 42], backgroundColor: '#FF8C00', borderRadius: 10 }] };
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Dashboards" title="Client, employee and admin views designed with premium clarity." body="The codebase includes route-level dashboard pages for client operations, employee attendance flow and administrative analytics." />
        <div className="mt-12 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <GlassCard>
            <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">Live Tracking Snapshot</p>
            <div className="mt-6 space-y-4">
              {[
                { label: 'Guard Status', value: 'On Duty' },
                { label: 'Zone', value: 'Corporate Park - Ravet' },
                { label: 'GPS Attendance', value: 'Synced' },
                { label: 'Emergency', value: 'Clear' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3">
                  <span className="text-white/60">{item.label}</span>
                  <span className="font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 h-48 rounded-[24px] border border-brand-gold/20 bg-[radial-gradient(circle_at_30%_35%,rgba(255,140,0,0.15),transparent_20%),linear-gradient(135deg,#0f0f0f,#070707)] p-4">
              <div className="grid h-full grid-cols-6 gap-2 opacity-60">
                {Array.from({ length: 36 }).map((_, i) => <div key={i} className="rounded bg-white/5" />)}
              </div>
            </div>
          </GlassCard>
          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-orange">Guard Readiness</p>
              <div className="mt-4 h-[260px]"><Doughnut data={doughnut} options={{ plugins: { legend: { labels: { color: '#ffffffaa' }}}}} /></div>
            </GlassCard>
            <GlassCard>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-orange">Admin Overview</p>
              <div className="mt-4 h-[260px]"><Bar data={bar} options={{ responsive: true, plugins: { legend: { display: false }}, scales: { x: { ticks: { color: '#ffffffaa' }, grid: { color: '#ffffff12' } }, y: { ticks: { color: '#ffffffaa' }, grid: { color: '#ffffff12' }}} }} /></div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TestimonialsSection = () => (
  <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
    <SectionHeading eyebrow="Testimonials" title="Glass-card social proof that feels executive, not ordinary." body="The testimonial carousel area is prepared with review cards, ratings and premium media treatment for video stories." center />
    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {testimonials.map((item) => (
        <GlassCard key={item.name}>
          <div className="flex gap-1 text-brand-gold">{Array.from({ length: item.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
          <p className="mt-5 text-lg leading-8 text-white/75">“{item.quote}”</p>
          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="font-heading text-xl text-white">{item.name}</p>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-orange">{item.role}</p>
          </div>
        </GlassCard>
      ))}
    </div>
  </section>
);

export const GalleryBlogFaqSection = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1.05fr_.95fr]">
        <div className="space-y-8">
          <SectionHeading eyebrow="Gallery & Blog" title="Masonry-style visual storytelling paired with SEO-focused articles." body="Gallery and content modules are designed to support recruitment updates, security tips and social credibility." />
          <div className="grid gap-4 md:grid-cols-2">
            {blogPosts.map((post, i) => (
              <GlassCard key={post.title} className={i === 0 ? 'md:col-span-2' : ''}>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">{post.tag}</p>
                <h3 className="mt-4 font-heading text-2xl text-white">{post.title}</h3>
                <p className="mt-3 text-white/68">{post.excerpt}</p>
              </GlassCard>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="FAQ" title="Animated accordions for fast confidence building." body="Supportive FAQ content improves conversions, SEO coverage and enquiry quality." />
          <div className="mt-8 space-y-4">
            {faqs.map((item, index) => (
              <GlassCard key={item.q}>
                <button onClick={() => setOpen(index)} className="flex w-full items-center justify-between gap-4 text-left">
                  <span className="font-heading text-xl text-white">{item.q}</span>
                  <span className="text-brand-gold">0{index + 1}</span>
                </button>
                {open === index && <p className="mt-4 text-white/68">{item.a}</p>}
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => (
  <section className="mx-auto grid max-w-7xl gap-8 px-4 py-24 md:px-6 lg:grid-cols-[0.95fr_1.05fr]">
    <div className="space-y-6">
      <SectionHeading eyebrow="Contact" title="Emergency-first contact architecture with map, call and quote pathways." body="Designed to convert high-urgency visitors into direct calls, quotation requests or WhatsApp conversations without friction." />
      <GlassCard>
        <div className="space-y-3 text-white/70">
          <p><span className="text-brand-gold">Address:</span> {brand.address}</p>
          <p><span className="text-brand-gold">Email:</span> {brand.email}</p>
          {brand.phones.map((phone) => <p key={phone}><span className="text-brand-gold">Phone:</span> {phone}</p>)}
          <p><span className="text-brand-gold">Working Hours:</span> 24x7 Emergency Support</p>
        </div>
      </GlassCard>
    </div>
    <GlassCard>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name"><input className="input-luxury" /></Field>
        <Field label="Company"><input className="input-luxury" /></Field>
        <Field label="Email"><input className="input-luxury" /></Field>
        <Field label="Phone"><input className="input-luxury" /></Field>
        <Field label="Requirement"><textarea rows={5} className="input-luxury md:col-span-2" /></Field>
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <MagneticButton href={`mailto:${brand.email}`}>Send Enquiry</MagneticButton>
        <a target="_blank" rel="noreferrer" href="https://maps.google.com/?q=Flat No.402 Brilliance Society Ravet Pune" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/80">Open Google Map</a>
      </div>
    </GlassCard>
  </section>
);

export const DashboardShell = ({ title, subtitle, cards }: { title: string; subtitle: string; cards: Array<{ label: string; value: string; icon: React.ReactNode }> }) => (
  <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
    <SectionHeading eyebrow="Portal Preview" title={title} body={subtitle} />
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <GlassCard key={card.label}>
          <div className="flex items-center justify-between text-brand-gold">{card.icon}<span className="text-xs uppercase tracking-[0.3em]">Live</span></div>
          <p className="mt-5 font-heading text-4xl text-white">{card.value}</p>
          <p className="mt-2 text-white/62">{card.label}</p>
        </GlassCard>
      ))}
    </div>
  </section>
);

export const dashboardCards = {
  client: [
    { label: 'Booked Services', value: '18', icon: <CalendarRange /> },
    { label: 'Invoices', value: '12', icon: <FileSpreadsheet /> },
    { label: 'Assigned Guards', value: '46', icon: <ShieldCheck /> },
    { label: 'Support Tickets', value: '03', icon: <HandCoins /> },
  ],
  employee: [
    { label: 'Attendance', value: '96%', icon: <ShieldCheck /> },
    { label: 'Shift Hours', value: '228', icon: <CalendarRange /> },
    { label: 'Training', value: '08', icon: <GraduationCap /> },
    { label: 'Leave Balance', value: '06', icon: <HeartPulse /> },
  ],
  admin: [
    { label: 'Revenue', value: formatINR(2450000), icon: <Banknote /> },
    { label: 'Clients', value: '150+', icon: <Building2 /> },
    { label: 'Guards', value: '500+', icon: <ShieldCheck /> },
    { label: 'Complaints', value: '04', icon: <MapPinned /> },
  ],
};
