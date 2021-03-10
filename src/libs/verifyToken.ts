import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import router from '../routes/user'

export interface IPayload {
    _id: string;
    iat: number;
} 

export const TokenValidation = (req: Request, res: Response, next : NextFunction) => {
    try{
        const token = req.header('auth-token')
        if(!token) return res.status(401).json('Access denied')
        const payload = jwt.verify(token, 'SECRET_TOKEN') as IPayload;
        req.userId = payload._id;
        next()
    }catch(err){
        console.log(err)
        res.send("Invalid Token")
    }
}

export default router;