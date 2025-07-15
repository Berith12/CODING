import express from 'express';
const router = express.Router();
import { createLeaveRequest, getAllLeaveRequests } from '../controllers/leaveRequestController.js';
import { verifyToken } from '../middleware/verifytoken.js';
import { checkRole } from '../middleware/checkRole.js';

router.post('/leave-requests', verifyToken, checkRole(['Employee']), createLeaveRequest);
router.get('/leave-requests', verifyToken, checkRole(['Admin']), getAllLeaveRequests);

export default router;