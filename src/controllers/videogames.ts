import { NextFunction, Request, Response } from "express";
import Videogame from '../models/videogame';
import mongoose from "mongoose";

const getAll = async(req: Request, res: Response, next: NextFunction) => {

    const result = await Videogame.find().exec();

    // TODO search for all vg and return
    return res.status(200).json({
        messagge : 'Get all',
        result
    });
};

const create = async(req: Request, res: Response, next: NextFunction) => {
    const { name, company, year } = req.body;

    // TODO Validate parameters

    const videgame = new Videogame({
        _id : new mongoose.Types.ObjectId,
        name,
        company,
        year
    });

    const result = await videgame.save();

    return res.status(201).json({
        messagge : 'Create',
        result
    });
};

const update = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { name, company, year } = req.body;

    // VALIDATE 
    const result = await Videogame.findByIdAndUpdate(id, {name, company, year}, { new: true});

    return res.status(200).json({
        messagge : 'Update',
        result
    });
};

const remove = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await Videogame.findByIdAndDelete(id);
    // TODO: search for vg by id = id, delete from db
    return res.status(200).json({
        messagge : 'Remove',
        result
    });
};

const get = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    //TODO search for vg with id = id and return

    const result = await Videogame.findById(id);

    return res.status(201).json({
        messagge : 'Get',
        result
    });
};

export default { getAll, create, update, remove, get}