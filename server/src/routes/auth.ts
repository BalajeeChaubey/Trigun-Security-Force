import { Router } from 'express';
import { z } from 'zod';
import { validateBody } from '../middlewares/validate.js';
import { comparePassword, hashPassword, signToken } from '../lib/security.js';

const router = Router();
const schema = z.object({ email: z.string().email(), password: z.string().min(6) });
const demoUser = { email: 'admin@trigunsecurity.in', passwordHash: await hashPassword('Secure@123') };

router.post('/login', validateBody(schema), async (req, res) => {
  const valid = req.body.email === demoUser.email && await comparePassword(req.body.password, demoUser.passwordHash);
  if (!valid) return res.status(401).json({ success: false, message: 'Invalid credentials' });
  return res.json({ success: true, message: 'Login successful', token: signToken({ role: 'admin', email: req.body.email }) });
});

export default router;
