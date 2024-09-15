
import mongoose from "mongoose";

const User2Schema = mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true

    },
    designation: {
        type: String,
        required: true
    },
    companyname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const User2 = mongoose.model("User2", User2Schema);