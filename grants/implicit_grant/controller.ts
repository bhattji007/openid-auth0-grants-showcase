import { Request, Response } from "express";


export class ImpicitGrantController{
    public login=async (req:Request,res:Response)=>{
        res.sendStatus(200);
    }
    public callback=async (req:Request,res:Response)=>{
        res.sendStatus(200);
    }
}