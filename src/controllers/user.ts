import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config'

const login = async(req: Request, res: Response, next: NextFunction) =>{
    const username = req.body.username;
    const password = req.body.password;

    // TODO search user in db

    const user = {
        id: 1,
        username,
        password: '$2b$10$wVEAdZsTi1jTaDECgczCg.A/DophB6xD5OWKmL1HulAhxGIcsicWW'
    };

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword){
        res.status(400).json({
            error: 'Invalid password or username'
        });
    }

    const token = jwt.sign({ username, id: user.id}, config.secrets.token);

    return res.status(200).json({
        message: 'Login Succesfull',
        token
    });


};


const register = async (req: Request, res: Response, next: NextFunction) => {
    const username = req.body.username;
    const password = req.body.password;

    // TODO validate username email, password lenght, caracters

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // TODO save user and pass
    return res.status(200).json({
        message: 'Register Success',
        user: {
            id: 1,
            username,
            password: passwordHash, //NO SE HACE
        }
    });
};

export default{ register, login }