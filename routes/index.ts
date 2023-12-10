import {Router} from 'express';
import { grantRouter } from '../grants';
const router = Router();

router.use("/grant",grantRouter)

export default router;