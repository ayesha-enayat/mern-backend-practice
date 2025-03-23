import express from 'express';
import user from './users/index.mjs';
const router = express.Router();

router.use('/user',user); //sare endpoints router ki index.mjs mai likhy gay
// router.use('/post',usersRoutes)

export default router
