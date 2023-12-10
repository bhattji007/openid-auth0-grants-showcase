import { Request, Response } from "express";


export class ImpicitGrantController{
    public login=async (req:Request,res:Response)=>{
        const url=`https://${process.env.AUTH0_DOMAIN}/authorize?response_type=id_token token&response_mode=form_post&client_id=${process.env.AUTH0_CLIENT_ID}&redirect_uri=${process.env.IMPLICIT_FLOW_REDIRECT_URI}&scope=openid%20name%20picture&state=STATE&nonce=NONCE`;
        res.redirect(url);
    }
    public callback=async (req:Request,res:Response)=>{

        const data=JSON.stringify(req.body, null, 2);
        res.json({
            message:"callback completed succesfully for implicit grant go to /profile to see the profile",
            data:data
        });
    }

}