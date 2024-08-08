import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const coderSchema = new Schema({
    fname: {type: String, required: true },
    lname: String,
    gender: String,
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {Timestamps: true});

const Coder = mongoose.model('Coder', coderSchema);
export default Coder;