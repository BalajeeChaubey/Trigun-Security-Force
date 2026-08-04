import { Router } from 'express';
import { guardTracking } from './mockData.js';

const router = Router();
router.get('/', (_req, res) => res.json({ success: true, message: 'Live tracking feed', data: guardTracking }));

export default router;
