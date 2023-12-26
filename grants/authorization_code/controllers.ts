import { Request, Response } from "express";
import axios from "axios";

export class AuthorizationCodeGrantController{
    public login=async (req:Request,res:Response)=>{
        const url=`https://${process.env.AUTH0_DOMAIN}/authorize?response_type=code&client_id=${process.env.AUTH0_CLIENT_ID}&redirect_uri=${process.env.AUTHORIZATION_CODE_REDIRECT_URI}&scope=openid%20name%20picture`;
        res.redirect(url);
    }
    public callback=async (req:Request,res:Response)=>{
        // const data=JSON.stringify(req.body, null, 2);
        const code= req.query.code;

        const {data}= await axios.post(
            `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
            {
              grant_type: "authorization_code",
              client_id: process.env.AUTH0_CLIENT_ID,
              client_secret: process.env.AUTH0_CLIENT_SECRET,   
              code,
              scope: "openid email profile",
              redirect_uri: process.env.AUTHORIZATION_CODE_REDIRECT_URI,
            }
          );
          console.log(data);
        res.cookie("access_token",data.access_token);
        res.json({
            message:"callback completed succesfully for Auhtorization Code go to /profile to see the profile",
            data:code 
        });
    }
    public profile=async (req:Request,res:Response)=>{
        const {data}= await axios.get(`https://${process.env.AUTH0_DOMAIN}/userinfo`,{headers:{Authorization:`Bearer ${req.cookies.access_token}`}});
        res.json({
            message:"profile",
            data:data
        });
    }

}
