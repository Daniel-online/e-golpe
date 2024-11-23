import { get } from "mongoose";
import { registerUser , loginUser} from "../Services/auth.service.js"

export const register = async(req, res) =>{
    try {

        const newUser = await registerUser(req.body);
        const { password, ...data} = newUser._doc;

        res.status(200).json({
            data,
            message: "Usuario cadastrado com sucesso"
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Registro nao foi possivel de ser completado..."
        })
        console.log(error)

    }
}

export const login = async(req, res)=>{
    try {
        const loggedUser = await loginUser(req.body);
        res.status(200).json({message:"Login confirmado...", loggedUser})
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Login nao foi possivel de ser completado..."
        })
        console.log(error)
    }
}