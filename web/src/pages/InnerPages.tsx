import { CalendarRange, LayoutDashboard, ShieldCheck, UserCheck } from 'lucide-react';
import { ContactSection, DashboardShell, dashboardCards, ServicesSection, IndustriesSection, AboutSection, BookingWizardSection, CalculatorSection, GalleryBlogFaqSection } from '@/components/site/Sections';
import { GlassCard, SectionHeading } from '@/components/site/UI';
import { useSiteMeta } from '@/hooks/useSiteMeta';

export const ServicesPage = () => { useSiteMeta('Services'); return <div className="pt-12"><ServicesSection /></div>; };
export const IndustriesPage = () => { useSiteMeta('Industries'); return <div className="pt-12"><IndustriesSection /></div>; };
export const AboutPage = () => { useSiteMeta('About'); return <div className="pt-12"><AboutSection /></div>; };
export const BookingPage = () => { useSiteMeta('Booking Wizard'); return <div className="pt-12"><BookingWizardSection /></div>; };
export const CalculatorPage = () => { useSiteMeta('Cost Calculator'); return <div className="pt-12"><CalculatorSection /></div>; };
export const ContactPage = () => { useSiteMeta('Contact'); return <div className="pt-12"><ContactSection /></div>; };

export const RecruitmentPage = () => {
  useSiteMeta('Recruitment');
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <SectionHeading eyebrow="Recruitment" title="Digital intake for guards, documents and verification workflow." body="The recruitment module is designed for resume uploads, Aadhaar, PAN, police verification and status tracking." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {['Upload Resume', 'Upload Aadhaar', 'Upload PAN', 'Police Verification', 'Educational Documents', 'Passport Photo', 'Experience Certificate', 'Medical Certificate'].map((item) => (
          <GlassCard key={item}><p className="font-heading text-xl text-white">{item}</p></GlassCard>
        ))}
      </div>
    </section>
  );
};

export const ClientDashboardPage = () => {
  useSiteMeta('Client Dashboard');
  return <DashboardShell title="Client dashboard with bookings, invoices, documents and service visibility." subtitle="Authentication-ready client portal scaffold with invoice management, assigned guards, notifications and support workflows." cards={dashboardCards.client} />;
};

export const EmployeeDashboardPage = () => {
  useSiteMeta('Employee Dashboard');
  return <DashboardShell title="Employee dashboard with attendance, shifts, salary and training modules." subtitle="Built for shift visibility, leave balance, announcements, performance and ID card access." cards={dashboardCards.employee} />;
};

export const AdminDashboardPage = () => {
  useSiteMeta('Admin Panel');
  return <DashboardShell title="Admin analytics, booking command and operational oversight." subtitle="Configured for revenue charts, complaints, guard readiness, recruitment funnel, settings and report control." cards={dashboardCards.admin} />;
};

export const TrackingPage = () => {
  useSiteMeta('Live Tracking');
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <SectionHeading eyebrow="Live Tracking" title="Google Maps-style duty status with patrol and emergency states." body="This page is prepared for real-time tracking integration via Socket.io and map services using dummy API data during development." />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <GlassCard className="min-h-[420px]">
          <div className="h-full rounded-[24px] border border-brand-gold/20 bg-[radial-gradient(circle_at_25%_30%,rgba(255,140,0,.2),transparent_20%),radial-gradient(circle_at_70%_60%,rgba(212,175,55,.18),transparent_20%),linear-gradient(135deg,#0d0d0d,#050505)] p-4">
            <div className="grid h-full grid-cols-8 gap-2 opacity-60">{Array.from({ length: 64 }).map((_, i) => <div key={i} className="rounded-md bg-white/5" />)}</div>
          </div>
        </GlassCard>
        <div className="grid gap-6">
          {[
            { icon: <ShieldCheck />, title: 'On Duty', body: '36 guards currently deployed across active contracts.' },
            { icon: <UserCheck />, title: 'Patrolling', body: '12 guards in mobile and route-based patrol cycles.' },
            { icon: <CalendarRange />, title: 'Shift Change', body: 'Next shift wave scheduled in 48 minutes.' },
            { icon: <LayoutDashboard />, title: 'Emergency', body: 'No critical incidents flagged by current dummy API.' },
          ].map((item) => (
            <GlassCard key={item.title}>
              <div className="flex items-center gap-4 text-brand-gold">{item.icon}<p className="font-heading text-2xl text-white">{item.title}</p></div>
              <p className="mt-4 text-white/68">{item.body}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export const BlogPage = () => { useSiteMeta('Blog'); return <div className="pt-12"><GalleryBlogFaqSection /></div>; };
