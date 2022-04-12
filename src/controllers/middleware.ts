import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyTokens = (req: Request, res: Response, next: NextFunction) => {
    try{
        const authorizattion = req.header('authorization');
        const token = authorizattion?.split(' ')[1];
        if(!token){
            res.status(400).json({error: 'Invalid token'})
        }

        next();
    }catch(error){
        res.status(400).json({error: 'Invalid token'})
    }


};

export default{ verifyTokens }