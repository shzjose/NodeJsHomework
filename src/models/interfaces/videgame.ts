import { Document } from 'mongoose';

export interface IVideogame extends Document{
    name: string,
    company: string,
    year: number
}