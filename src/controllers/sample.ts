import { NextFunction, Request, Response } from "express";


const samplePing = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        messagge : 'Pong'
    })
}
const sampleMarco = (req: Request, res: Response, next: NextFunction) => {
    return res.status(201).json({
        messagge : 'Polo'
    })
}