import express from'express';
import PostUser from './PostUser.mjs';



const router =express.Router()
router.post('/post', PostUser);


export default router