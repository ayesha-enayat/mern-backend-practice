import express from'express';
import postUser from './PostUser.mjs';
import getUsers from './GetUser.mjs';
import putUser from './PutUser.mjs';
import deleteUser from './Delete.mjs';
import loginUser from './LoginUser.mjs';
import tokenVerification from '../../config/tokenVerification.mjs';



const router =express.Router()
router.post('/', postUser);
router.get('/',tokenVerification,getUsers);
router.put('/:id',putUser);
router.delete('/:id',deleteUser)
router.post('/login',loginUser)


export default router