import { Router } from 'express';
import { z } from 'zod';
import PDFDocument from 'pdfkit';
import { validateBody } from '../middlewares/validate.js';

const router = Router();
const schema = z.object({ service: z.string().min(2), location: z.string().min(2), date: z.string(), guards: z.number().min(1), duration: z.string().min(2) });
const bookings: Array<z.infer<typeof schema> & { id: string }> = [];

router.get('/', (_req, res) => res.json({ success: true, message: 'Bookings fetched', data: bookings }));
router.post('/', validateBody(schema), (req, res) => {
  const booking = { id: `BK-${bookings.length + 1}`.padStart(6, '0'), ...req.body };
  bookings.push(booking);
  res.status(201).json({ success: true, message: 'Booking created', data: booking });
});
router.post('/quotation', validateBody(schema), (req, res) => {
  const doc = new PDFDocument({ margin: 40 });
  const chunks: Buffer[] = [];
  doc.on('data', (chunk) => chunks.push(chunk));
  doc.on('end', () => {
    const pdf = Buffer.concat(chunks);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=trigun-quotation.pdf');
    res.send(pdf);
  });
  doc.fontSize(22).text('TRIGUN SECURITY FORCE & FACILITY MANAGEMENT');
  doc.moveDown().fontSize(14).text('Premium Security Quotation');
  doc.moveDown().fontSize(12).text(JSON.stringify(req.body, null, 2));
  doc.end();
});

export default router;
