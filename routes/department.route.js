import express from 'express';
const router = express.Router();
import { createDepartment, getAllDepartments } from '../controllers/departmentController.js';
import { verifyToken } from '../middleware/verifytoken.js';
import { checkRole } from '../middleware/checkRole.js';

router.post('/departments', verifyToken, checkRole(['Admin']), createDepartment);
router.get('/departments', verifyToken, checkRole(['Admin']), getAllDepartments);

export default router;