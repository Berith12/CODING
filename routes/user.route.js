import express from 'express';
const router = express.Router();
import { createUser, getAllUsers, getUserById } from '../controller/user.controller.js';
import { verifyToken } from '../middleware/verifytoken.js';
import { checkRole } from '../middleware/check.js';

router.post('/users', createUser);
router.get('/users', verifyToken, checkRole(['Admin']), getAllUsers);
router.get('/users/:id', verifyToken, getUserById);

export default router;