import {Router} from 'express';
import { implicitGrantRouter } from './implicit_grant';
import { authorizationCodeGrantRouter } from './authorization_code';

export const grantRouter = Router();

grantRouter.use("/implicit_grant",implicitGrantRouter)
grantRouter.use("/authorization_code",authorizationCodeGrantRouter)