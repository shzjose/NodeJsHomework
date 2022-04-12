import { NextFunction, Request, Response } from "express";
import { Videogame } from "../models/videgames";


const getAll = (req: Request, res: Response, next: NextFunction) => {

    // TODO search for all vg and return
    return res.status(200).json({
        messagge : 'Get all',
        result: [
            {
                id: 1383883,
                name: 'BOTW',
                company: 'Nintendo',
                year: 2017
            },
            {
                id: 434,
                name: 'FFF',
                company: 'Nintendo',
                year: 2014
            }
        ]
    });
};

const create = (req: Request, res: Response, next: NextFunction) => {
    const vg: Videogame = req.body;

    // TODO Validate parameters

    return res.status(201).json({
        messagge : 'Create',
        result: {id:0, ...vg}
    });
};

const update = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.identifier;
    const vg: Videogame = req.body;

    // VALIDATE 


    return res.status(200).json({
        messagge : 'Update',
        result: {id, ...vg}
    });
};

const remove = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    // TODO: search for vg by id = id, delete from db
    return res.status(200).json({
        messagge : 'Remove',
        result: id
    });
};

const get = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    //TODO search for vg with id = id and return

    const vg: Videogame= {
        id: parseInt(id),
        name: 'BOTW',
        company: 'Nintendo',
        year: 2017
    }
    return res.status(201).json({
        messagge : 'Get',
        result: vg
    });
};

export default { getAll, create, update, remove, get}