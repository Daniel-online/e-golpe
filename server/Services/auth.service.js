import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
//registerer

export const registerUser = async(body) =>{
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = userModel({
        username: body.username,
        password: hashedPassword,
        email: body.email,
        address: body.address,
        phoneNumber: body.phoneNumber
    });


    await newUser.save();

    return newUser;
}

export const loginUser = async(body, res) =>{
    if (!body || !body.email || !body.password) {
        throw new Error("Campos obrigatórios ausentes.");
    }

    try {
        const user = await userModel.findOne({ email: body.email });
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }

        const passwordCheck = await bcrypt.compare(body.password, user.password);
        if (!passwordCheck) {
            throw new Error("Senha incorreta, tente novamente.");
        }

        return user;
    } catch (error) {
        throw new Error(error.message || "Erro ao processar o login.");
    }

}