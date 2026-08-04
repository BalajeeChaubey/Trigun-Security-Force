import type { Industry, NavItem, Service, Stat, Testimonial } from '@/types';

export const brand = {
  name: 'TRIGUN SECURITY FORCE & FACILITY MANAGEMENT',
  tagline: 'Your Safety, Our Commitment',
  mission: 'Provide reliable, professional, and cost-effective security solutions.',
  vision: "Become Maharashtra's most trusted security provider.",
  address: 'Flat No.402, Brilliance Society, Ravet, Pune',
  phones: ['+91 7745876301', '+91 8805706151'],
  email: 'premtiwari1331993@gmail.com',
  values: ['Trustable', 'Reliable', 'Integral'],
};

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'About', to: '/about' },
  { label: 'Booking', to: '/booking' },
  { label: 'Calculator', to: '/calculator' },
  { label: 'Contact', to: '/contact' },
];

export const heroStats: Stat[] = [
  { value: '500+', label: 'Professional Guards' },
  { value: '150+', label: 'Happy Clients' },
  { value: '15+', label: 'Years Experience' },
  { value: '24x7', label: 'Emergency Support' },
];

export const services: Service[] = [
  { title: 'Corporate Security', description: 'Executive-grade front-desk, access control and perimeter monitoring for premium workplaces.', features: ['Visitor control', 'Lobby command', 'Emergency escalation'], icon: 'Building2' },
  { title: 'Industrial Security', description: 'Shift-based guard deployment, gate intelligence and incident prevention for plants and factories.', features: ['Gate passes', 'Material security', 'Loss prevention'], icon: 'Factory' },
  { title: 'Residential Security', description: 'Refined society security with visitor logs, patrol routes and community-first response.', features: ['Society patrol', 'Visitor management', 'Night rounds'], icon: 'House' },
  { title: 'Hospital Security', description: 'Sensitive patient-safe security coordination for healthcare campuses and emergency wards.', features: ['Emergency routing', 'ICU discipline', 'Crowd control'], icon: 'ShieldPlus' },
  { title: 'School Security', description: 'Trusted guard systems for schools with child-safe gatekeeping and timed dispersal support.', features: ['Entry screening', 'Bus bay oversight', 'Parent verification'], icon: 'GraduationCap' },
  { title: 'Event & VIP Security', description: 'Fast-response deployment for events, dignitary movement, protocol control and crowd dynamics.', features: ['Escort detail', 'Crowd zoning', 'Command booth'], icon: 'Crown' },
  { title: 'Facility Management', description: 'Integrated facility support covering housekeeping, operational supervision and compliance routines.', features: ['Housekeeping', 'Soft services', 'Supervisor reporting'], icon: 'LayoutDashboard' },
  { title: 'Security Guards', description: 'Professional, uniformed, police-verified manpower with discipline, posture and response training.', features: ['Police verified', 'Trained staff', 'Uniform discipline'], icon: 'UserCheck' },
];

export const industries: Industry[] = [
  { name: 'Corporate', summary: 'Boardrooms, IT parks and executive offices requiring polished access control.', metrics: 'Response SLA < 10 min' },
  { name: 'Manufacturing', summary: 'Large plants, machine zones and labour-intensive sites with layered perimeter security.', metrics: '24/7 gate intelligence' },
  { name: 'Warehouses', summary: 'Inventory-sensitive spaces with dock control, vehicle screening and shift handover.', metrics: 'Dock-to-dispatch coverage' },
  { name: 'Construction', summary: 'Dynamic access zones, equipment security and night patrol for active projects.', metrics: 'Asset theft deterrence' },
  { name: 'Hospitals', summary: 'Patient-safe, calm, protocol-driven deployment for critical healthcare environments.', metrics: 'High-sensitivity response' },
  { name: 'Schools', summary: 'Child-safe campus entry control and parent movement management.', metrics: 'Timed dispersal operations' },
  { name: 'Hotels', summary: 'Luxury guest experience with discreet but visible hospitality security.', metrics: 'Guest-first coverage' },
  { name: 'Retail & Malls', summary: 'Crowd control, floor presence and incident interception for active footfall zones.', metrics: 'Peak-hour support' },
  { name: 'Banks & Housing Societies', summary: 'Trust-led security presence with process discipline and routine vigilance.', metrics: 'Confidence-centric service' },
];

export const trustLogos = ['Corporate Parks', 'Hospitals', 'Banks', 'Hotels', 'Schools', 'Factories', 'Construction', 'Shopping Malls'];

export const reasons = [
  'Police Verified Guards',
  'Background Verification',
  '24x7 Monitoring',
  'Rapid Deployment',
  'Affordable Pricing',
  'Licensed Personnel',
  'GPS Attendance',
  'Emergency Response',
  'Uniform Discipline',
  'Professional Training',
];

export const testimonials: Testimonial[] = [
  { name: 'R. Kulkarni', role: 'Operations Head, Pune Tech Park', quote: 'TRIGUN brought command, confidence and executive-level discipline to our campus security.', rating: 5 },
  { name: 'Dr. J. Sharma', role: 'Hospital Administrator', quote: 'Their hospital deployment blended calm behaviour with rapid emergency support exactly as required.', rating: 5 },
  { name: 'A. Deshmukh', role: 'Chairman, Housing Society', quote: 'Visitor management, guard posture and nightly patrols improved from day one.', rating: 5 },
];

export const faqs = [
  { q: 'How quickly can guards be deployed?', a: 'Rapid deployment requests are prioritized and structured based on location, shift profile and risk level.' },
  { q: 'Are guards police verified?', a: 'Yes. Deployment prioritizes police verification, background checks, document screening and training status.' },
  { q: 'Do you serve residential societies and hospitals?', a: 'Yes. The company serves corporate, industrial, residential, hospital, school, event and facility management needs.' },
  { q: 'Can clients receive quotations quickly?', a: 'Yes. The booking flow and estimator are designed for fast inquiry capture and quotation generation.' },
];

export const blogPosts = [
  { title: '7 Modern Security Layers Every Corporate Campus Should Audit', tag: 'Security Tips', excerpt: 'A practical checklist covering access control, perimeter visibility, emergency escalation and staffing discipline.' },
  { title: 'How Hospital Security Requires Calm Response Design', tag: 'Company News', excerpt: 'Why healthcare security is not only about presence, but behaviour, routing and communication clarity.' },
  { title: 'Recruitment Standards That Create Trustworthy Security Teams', tag: 'Recruitment Updates', excerpt: 'Document verification, training, uniform standards and attitude screening determine field performance.' },
];
