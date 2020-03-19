import express from 'express';
import UserSignUp from '../controller/user';

const router = express.Router();

router.post('/signup', UserSignUp.signupHandler);

export default router;