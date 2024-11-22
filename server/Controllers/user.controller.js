import userModel from "../models/user.model";
//registerer

export const register = async(req, res) =>{
    try {
        const newUser = userModel({
            userName: "Teste",
            password: "*******",
            email:"teste@testmail.com",
            address: "Nowhere"
        });

        await newUser();

        res.status(200).json({
            newUser,
            message: "Usuario cadastrado com sucesso"
        })

    } catch (error) {
        res.status(500).json({
            error: error,
            message: "Registro nao foi possivel de ser completado..."
        })
        console.log(error)

    }
}