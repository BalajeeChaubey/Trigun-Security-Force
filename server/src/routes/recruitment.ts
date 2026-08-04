import { Router } from 'express';
import multer from 'multer';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post('/apply', upload.fields([
  { name: 'resume', maxCount: 1 },
  { name: 'aadhaar', maxCount: 1 },
  { name: 'pan', maxCount: 1 },
  { name: 'policeVerification', maxCount: 1 },
]), (req, res) => {
  res.status(201).json({ success: true, message: 'Application received', files: req.files });
});

export default router;
