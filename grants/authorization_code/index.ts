import { Router } from "express";
import { AuthorizationCodeGrantController } from "./controllers";

const AuthorizationCodeGrant= new AuthorizationCodeGrantController();

export const authorizationCodeGrantRouter = Router();


authorizationCodeGrantRouter.get("/login",AuthorizationCodeGrant.login);
authorizationCodeGrantRouter.get("/callback",AuthorizationCodeGrant.callback);
authorizationCodeGrantRouter.get("/profile",AuthorizationCodeGrant.profile);