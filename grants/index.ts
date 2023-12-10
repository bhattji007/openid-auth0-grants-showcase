import {Router} from 'express';
import { implicitGrantRouter } from './implicit_grant';

export const grantRouter = Router();

grantRouter.use("/implicit_grant",implicitGrantRouter)