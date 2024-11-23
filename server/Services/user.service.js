import bcrypt from "bcrypt"
import userModel from "../models/user.model.js"

//read, update & delete

export const updateUser = async(userId, updateData)=>{
    if (updateData.password){
        try {
            updateData.password = await bcrypt.hashSync(updateData.password);
        } catch (error) {
            throw error;
        }
    }
    try {
        const user = await userModel.findByIdAndUpdate(userId, {
            $set: updateData
        },{
            new:true
        }); 
        return user;
    } catch (error) {
        throw error;
    }
}