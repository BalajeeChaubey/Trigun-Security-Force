import { Router } from 'express';
import { z } from 'zod';
import { validateBody } from '../middlewares/validate.js';

const router = Router();
const schema = z.object({ name: z.string().min(2), email: z.string().email(), phone: z.string().min(8), message: z.string().min(10) });

router.post('/', validateBody(schema), (req, res) => {
  res.status(201).json({ success: true, message: 'Enquiry submitted', data: req.body });
});

export default router;
