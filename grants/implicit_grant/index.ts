import { Router } from "express";
import { ImpicitGrantController } from "./controller";

const implicitController = new ImpicitGrantController();
export const  implicitGrantRouter = Router();

implicitGrantRouter.get("/login",implicitController.login);
implicitGrantRouter.get("/callback",implicitController.callback);