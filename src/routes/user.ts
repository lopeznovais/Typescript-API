import {Router} from 'express'
const router: Router = Router();
import {TokenValidation} from '../libs/verifyToken'
import {getUserById, signup, signin, updateUser, deleteUser} from '../controllers/user.controller';

router.post('/signup', signup);
router.get('/signin/:id', signin);
router.get('/user', TokenValidation, getUserById)
router.put('/user', TokenValidation, updateUser)
router.delete('/user', TokenValidation, deleteUser);

export default router;