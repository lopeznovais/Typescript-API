import {Router} from 'express'
const router: Router = Router();
import {TokenValidation} from '../libs/verifyToken'
import { getAddresses, getAddressById, createAddress, updateAddress, deleteAddress } from '../controllers/address.controller';

router.get('/addresses', TokenValidation, getAddresses);
router.get('/address/:id', TokenValidation, getAddressById);
router.post('/address', TokenValidation, createAddress);
router.put('/address/:id', TokenValidation, updateAddress)
router.delete('/address/:id', TokenValidation, deleteAddress);

export default router;