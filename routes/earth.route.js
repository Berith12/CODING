import express from 'express';
import { login } from '../controller/earth.controller.js';

const router = express.Router();
// router.post('/login', login);
router.post('/login', login);
router.get('/hi', (req,res)=>{
    res.send('I am your 1st response from the server');
});
export default router;