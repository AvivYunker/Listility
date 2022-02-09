import express from 'express';
const router = express.Router();

import { register, login, updateUser } from '../controllers/authController.js'

router.route('/register').post(register);
router.route('/login').post(register);
router.route('/updateUser').post(register);

export default router