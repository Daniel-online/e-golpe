import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String, 
        required: true,
        unique: false,
        min: 3,
    },
    password:{
        type: String,
        required: true,
        min: 6
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: Number,
        required: true,
        unique: true
    },
    address:{
        type: String, 
        required: false,
        unique: false,
    },
    profilePicture:{
        type: String,
        default:""
    },
    coverPicture:{
        type: String,
        default:""
    }
});

export default mongoose.model("User", userSchema);