import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/components/site/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage, AdminDashboardPage, BlogPage, BookingPage, CalculatorPage, ClientDashboardPage, ContactPage, EmployeeDashboardPage, IndustriesPage, RecruitmentPage, ServicesPage, TrackingPage } from '@/pages/InnerPages';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/recruitment" element={<RecruitmentPage />} />
        <Route path="/client-dashboard" element={<ClientDashboardPage />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboardPage />} />
        <Route path="/admin-panel" element={<AdminDashboardPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
