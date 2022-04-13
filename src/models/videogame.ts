import { Schema } from "mongoose";
import mongoose from "mongoose";
import { IVideogame } from "./interfaces/videgame";

const VideogameSchema: Schema = new Schema({
    name: {type: String, required: true},
    company: {type: String, required: true},
    year: {type: Number, required: true}
}, {
    timestamps: true
})

export default mongoose.model<IVideogame>('Videogame', VideogameSchema);