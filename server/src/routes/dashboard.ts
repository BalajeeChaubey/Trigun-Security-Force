import { Router } from 'express';

const router = Router();
router.get('/client', (_req, res) => res.json({ success: true, message: 'Client dashboard', data: { bookedServices: 18, invoices: 12, assignedGuards: 46 } }));
router.get('/employee', (_req, res) => res.json({ success: true, message: 'Employee dashboard', data: { attendance: '96%', shiftHours: 228, leaveBalance: 6 } }));
router.get('/admin', (_req, res) => res.json({ success: true, message: 'Admin dashboard', data: { revenue: 2450000, clients: 150, guards: 500, complaints: 4 } }));

export default router;
