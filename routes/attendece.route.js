import express from 'express';
const router = express.Router();
import { createAttendance, getAllAttendances } from '../controllers/attendanceController.js';
import { verifyToken } from '../middleware/verifytoken.js';
import { checkRole } from '../middleware/checkRole.js';

router.post('/attendances', verifyToken, checkRole(['Employee']), createAttendance);
router.get('/attendances', verifyToken, checkRole(['Admin']), getAllAttendances);

export default router;